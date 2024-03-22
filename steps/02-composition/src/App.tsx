import { Header } from './components/Header';
import { PersonCardModel } from './components/PersonCardModel';
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
        <PersonCardModel />
        <pre style={{ fontSize: 12 }}>{JSON.stringify(randomPerson, null, 2)}</pre>
      </main>
    </>
  );
}

export default App;
