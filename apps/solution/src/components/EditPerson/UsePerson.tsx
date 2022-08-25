import { useEffect, useState } from 'react';
import { getPerson, PersonModel, updatePerson } from '../../api/person';

export default function usePerson(id: string) {
  const [person, setPerson] = useState<PersonModel | null>(null);

  useEffect(() => {
    getPerson(id).then(setPerson);
  }, [id]);

  const refreshPerson = (): void => {
    getPerson(id).then(setPerson);
  };

  const updatePersonAction = (person: PersonModel): void => {
    updatePerson(person).then((updatedPerson) => {
      setPerson(updatedPerson);
    });
  };

  return [person, updatePersonAction, refreshPerson] as const;
}
