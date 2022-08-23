import { useEffect, useMemo, useState } from 'react';
import { getPeople, PersonModel } from '../../api/person';

export default function useManagers(currentId: string) {
  const [managers, setManagers] = useState<PersonModel[] | null>(null);

  useMemo(() => {
    getPeople().then((res) =>
      setManagers(res.filter((p) => p.id !== currentId))
    );
  }, [currentId]);

  return managers;
}
