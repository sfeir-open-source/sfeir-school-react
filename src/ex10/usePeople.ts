import { useMutation, useQuery, useQueryClient } from "react-query";
import { loadPeople, savePerson } from "../utils";

type UsePeople = () => {
  people: People;
  getPersonById: (id: string) => Person | undefined;
  updatePerson: (updatedPerson: Person) => Promise<Person>;
  isLoading: boolean;
};

const PEOPLE_KEY = "people";

export const usePeople: UsePeople = () => {
  const { isLoading, data: people } = useQuery<People>({
    queryKey: [PEOPLE_KEY],
    queryFn: loadPeople,
  });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (updatedPerson: Person) => {
      await savePerson(updatedPerson);
      return updatedPerson;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PEOPLE_KEY] });
    },
  });
  return {
    people,
    isLoading,
    getPersonById: (id) => people.find((p) => p.id === id),
    updatePerson: mutation.mutateAsync,
  };
};
