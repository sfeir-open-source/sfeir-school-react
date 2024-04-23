import { PeopleGrid } from '../components/PeopleGrid';
import { PersonCard } from '../components/PersonCard';
import { usePeople } from '../hooks/use-people';

export function PeopleGridPage() {
  const people = usePeople();
  return (
    <>
      <PeopleGrid>
        {people.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </PeopleGrid>
    </>
  );
}
