import { useMutation, useQuery, useQueryClient } from "react-query";
import { loadPeople, savePerson } from "../../utils";

type UsePeople = () => {
  people: People;
  isLoading: boolean;
  updatePerson: (updated: Person) => Promise<Person>;
};

export const PEOPLE_QUERY_KEY = "people";

export const usePeople: UsePeople = () => {
  const queryClient = useQueryClient();

  const { data: people, isLoading,  } = useQuery(PEOPLE_QUERY_KEY, loadPeople,
    /**
     * Importants props to know
     * (see: https://react-query-v3.tanstack.com/guides/important-defaults)
     */
    {
      initialData: undefined,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 5, // 5 minutes
      staleTime: 1000 * 60 * 60, // one hour
      retry: 3
    }
  );
  // Invalidate people when updating a person to refetch
  const mutation = useMutation(
    (updatedPerson: Person) => savePerson(updatedPerson),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(PEOPLE_QUERY_KEY);
      }
    }
  );
  // Use mutateAsync to have a Promise to be resolve
  const updatePerson = (updated: Person) => mutation.mutateAsync(updated);

  return { people, isLoading, updatePerson };
};
