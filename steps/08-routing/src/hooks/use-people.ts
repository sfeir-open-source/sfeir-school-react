import { useEffect, useState } from 'react';

export function usePeople() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/people')
      .then((res): Promise<Person[]> => res.json())
      .then((newPeople) => setPeople(newPeople));
  }, []);

  return people;
}
