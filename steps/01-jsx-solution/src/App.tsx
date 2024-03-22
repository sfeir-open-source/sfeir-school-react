import { Header } from './components/Header';
import { Card } from './components/Card';

import './App.css';

const message = 'React @ SFEIR';

function App() {
  return (
    <>
      <Header />
      <Card title={message} />
    </>
  );
}

export default App;
