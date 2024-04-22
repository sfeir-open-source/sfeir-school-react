import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { PersonCard } from './components/PersonCard';
import { Carousel } from './components/Carousel';
// import { people } from '../../api/people.json';

import './App.css';
import { PeopleGrid } from './components/PeopleGrid';

function App() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetch('/api/people')
      .then((res): Promise<Person[]> => res.json())
      .then((newPeople) => setPeople(newPeople));
  }, []);

  const randomPerson = people[Math.floor(Math.random() * people.length)];

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

export default App;
