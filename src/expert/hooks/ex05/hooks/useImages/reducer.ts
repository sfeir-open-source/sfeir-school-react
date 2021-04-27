import { Image } from "../../types";
import { Action, ACTIONS } from "./actions";
import { computeNext, computePrevious } from "./utils";

export interface State {
  initialized: boolean;
  images?: Image[];
  selected: Image | null;
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ACTIONS.INITIALIZED:
      return {
        ...state,
        initialized: true,
        images: action.images,
        selected: action.images[0],
      };

    case ACTIONS.PREVIOUS:
      if (!state.initialized) {
        return state;
      }

      return {
        ...state,
        selected: computePrevious(state.images, state.selected),
      };

    case ACTIONS.NEXT:
      if (!state.initialized) {
        return state;
      }
      return {
        ...state,
        selected: computeNext(state.images, state.selected),
      };

    case ACTIONS.GOTO:
      if (!state.initialized) {
        return state;
      }
      return {
        ...state,
        selected: action.selected,
      };

    default:
      return state;
  }
}
