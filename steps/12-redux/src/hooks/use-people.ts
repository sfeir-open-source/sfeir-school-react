import { useEffect, useState } from 'react';
import { useAppConfig } from '../config';

export function usePeople() {
  const { config } = useAppConfig();
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch(`${config.apiBaseUrl}/people`)
      .then((res): Promise<Person[]> => res.json())
      .then((newPeople) => setPeople(newPeople));
  }, [config.apiBaseUrl]);

  return people;
}
