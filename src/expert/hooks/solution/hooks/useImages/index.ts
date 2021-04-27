import { useEffect, useCallback, useReducer } from "react";
import { Image } from "../../../dto";
import { goto, initialized, next, previous } from "./actions";
import { reducer, State } from "./reducer";

export interface UseImages {
  initialized: boolean;
  selected: Image | null;
  images?: Image[];
  handlePrevious: () => void;
  handleNext: () => void;
  handleChange: (image: Image) => void;
}

const INITIAL_STATE: State = {
  initialized: false,
  images: undefined,
  selected: null,
};

export default function useImages(): UseImages {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    fetch("http://localhost:1337")
      .then((res) => res.json())
      .then((data) => dispatch(initialized(data)));
  }, []);

  const handlePrevious = useCallback(() => dispatch(previous()), []);
  const handleNext = useCallback(() => dispatch(next()), []);
  const handleChange = useCallback((index) => dispatch(goto(index)), []);

  return {
    initialized: state.initialized,
    images: state.images,
    selected: state.selected,
    handlePrevious,
    handleNext,
    handleChange,
  };
}
