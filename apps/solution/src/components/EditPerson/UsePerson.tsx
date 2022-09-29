import { useMemo } from 'react';
import { PersonModel, updatePerson } from '../../api/person';
import { PeopleActionKind, usePeople } from '../../contexts/PeopleContext';

export default function usePerson(id: string) {
  const [people, dispatch] = usePeople();
  const person = useMemo(() => people.find(person => person.id === id), [people, id])

  const updatePersonAction = (person: PersonModel): void => {
    updatePerson(person).then((updatedPerson) => {
      dispatch({ type: PeopleActionKind.UPDATE, person: updatedPerson })
    });
  };

  return [person, updatePersonAction] as const;
}
