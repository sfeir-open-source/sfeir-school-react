import { useEffect, useState } from 'react';

export function usePeople() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch('/api/people')
      .then((res): Promise<Person[]> => res.json())
      .then((newPeople) => setPeople(newPeople));
  }, []);

  return people;
}
