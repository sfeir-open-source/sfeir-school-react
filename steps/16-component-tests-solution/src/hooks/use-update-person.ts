import { useAppConfig } from '../config';

export function useUpdatePerson(id: string) {
  const { config } = useAppConfig();

  return (patch: Partial<Person>) => {
    return fetch(`${config.apiBaseUrl}/people/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(patch),
      headers: { 'Content-Type': 'application/json' },
    });
  };
}
