import { useEffect, useState } from 'react';
import { useAppConfig } from '../config';

export function usePerson(id: string) {
  const { config } = useAppConfig();
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
    fetch(`${config.apiBaseUrl}/people/${id}`)
      .then((res): Promise<Person> => res.json())
      .then((newPerson) => setPerson(newPerson));
  }, [config.apiBaseUrl, id]);

  return person;
}
