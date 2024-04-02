import { Header } from './components/Header';
import { PersonCard } from './components/PersonCard';

import './App.css';
import { Carousel } from './components/Carousel';

type AppProps = {
  people: People;
};

function App({ people }: AppProps) {
  const randomPerson = people[Math.floor(Math.random() * people.length)];

  return (
    <>
      <Header />
      <main>
        <PersonCard person={randomPerson} />
        <Carousel people={people} />
      </main>
    </>
  );
}

export default App;
