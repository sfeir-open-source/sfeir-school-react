import People from '../components/people/people';
import EditPeople from '../components/EditPerson/EditPerson';
import styles from './app.module.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <header>
          <Link to="/">
            <h1>SF≡IR People</h1>
          </Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<People />} />
            <Route path="/edit/:id" element={<EditPeople />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
