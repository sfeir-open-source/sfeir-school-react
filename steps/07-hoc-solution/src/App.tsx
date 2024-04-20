import { Header } from './components/Header';
import { PersonCard } from './components/PersonCard';
import { Carousel } from './components/Carousel';
import { PeopleGrid } from './components/PeopleGrid';
import { usePeople } from './hooks/use-people';

import './App.css';

function App() {
  const people = usePeople();
  const randomPerson = useRandomPerson(people);

  return (
    <>
      <Header />
      <main>
        {people.length > 0 ? (
          <>
            <PersonCard person={randomPerson} />
            <Carousel people={people} />
            <PeopleGrid>
              {people.map((person) => (
                <PersonCard key={person.id} person={person} />
              ))}
            </PeopleGrid>
          </>
        ) : (
          <></>
        )}
      </main>
    </>
  );
}

function useRandomPerson(people: Person[]) {
  return people[Math.floor(Math.random() * people.length)];
}

export default App;
