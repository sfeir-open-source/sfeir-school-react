import {useQuery} from "react-query";
import {loadPeople} from "../utils";

type UsePeople = {
  people: People;
  isLoading: boolean;
  refetch: () => void;
}

export const usePeople = (): UsePeople => {
  const {data, isLoading, refetch} = useQuery(
      "people",
      () => loadPeople(),
      {
        initialData: [],
        refetchOnWindowFocus: false
      }
  );

  return {
    people: data,
    isLoading,
    refetch
  };
};