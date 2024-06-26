import { Header } from './components/Header';
import { PersonCard } from './components/PersonCard';

import './App.css';

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
      </main>
    </>
  );
}

export default App;
