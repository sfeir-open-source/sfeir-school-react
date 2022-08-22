import People from '../components/people/people';
import EditPeople from '../components/EditPeople/EditPeople';
import styles from './app.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <div className={styles.app}>
      <header>
        <h1>SF≡IR People</h1>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<People />} />
            <Route path="/edit/:id" element={<EditPeople />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
