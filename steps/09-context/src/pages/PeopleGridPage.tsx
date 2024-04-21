import { PeopleGrid } from '../components/PeopleGrid';
import { PersonCard } from '../components/PersonCard';
import { usePeople } from '../hooks/use-people';
import { Layout } from './Layout';

export function PeopleGridPage() {
  const people = usePeople();
  return (
    <Layout>
      <PeopleGrid>
        {people.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </PeopleGrid>
    </Layout>
  );
}
