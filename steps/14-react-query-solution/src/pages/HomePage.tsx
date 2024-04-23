import { Carousel } from '../components/Carousel';
import { PersonCard } from '../components/PersonCard';
import { usePeople } from '../hooks/use-people';
import { Layout } from './Layout';

export function HomePage() {
  const people = usePeople();
  const randomPerson = useRandomPerson(people);
  if (!people || people.length === 0) {
    return <></>;
  }
  return (
    <Layout>
      <h2>Let's meet!</h2>
      <PersonCard person={randomPerson} />
      <h2>All your colleagues!</h2>
      <Carousel people={people} />
    </Layout>
  );
}

function useRandomPerson(people: Person[]) {
  return people[Math.floor(Math.random() * people.length)];
}
