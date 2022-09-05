import { useEffect, useState } from 'react';
import { getPeople, PersonModel } from '../../api/person';

export default function useManagers(currentId: string) {
  const [managers, setManagers] = useState<PersonModel[] | null>(null);

  useEffect(() => {
    getPeople().then((res) =>
      setManagers(res.filter((p) => p.id !== currentId && p.isManager))
    );
  }, [currentId]);

  return managers;
}
