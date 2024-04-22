import { Layout } from './Layout';
import { usePerson } from '../hooks/use-person';
import { EditPersonFormCard } from '../components/EditPersonFormCard';
import { useUpdatePerson } from '../hooks/use-update-person';

export interface EditPeoplePageProps {
  id: string;
}

export function EditPeoplePage({ id }: EditPeoplePageProps) {
  const person = usePerson(id);
  const updatePerson = useUpdatePerson(id);
  if (!person) {
    return <Layout>Loading...</Layout>;
  }
  return (
    <Layout>
      <EditPersonFormCard person={person} onSubmit={(form) => updatePerson(form)} />
    </Layout>
  );
}
