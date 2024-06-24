import { Header } from './components/Header';
import { PersonCard } from './components/PersonCard';
import { Carousel } from './components/Carousel';
import { people } from '../../api/db.json';

import './App.css';
import { PeopleGrid } from './components/PeopleGrid';

function App() {
  const randomPerson = people[Math.floor(Math.random() * people.length)];

  return (
    <>
      <Header />
      <main>
        <PersonCard person={randomPerson} />
        <Carousel people={people} />
        <PeopleGrid>{/* Put here all PersonCard */}</PeopleGrid>
      </main>
    </>
  );
}

export default App;
