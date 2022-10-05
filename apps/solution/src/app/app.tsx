import People from '../components/people/people';
import EditPeople from '../components/EditPerson/EditPerson';
import styles from './app.module.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PeopleProvider } from '../contexts/PeopleContext';
import NewPersonForm from '../components/AddPerson/new-person-form';

export function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <main>
          <PeopleProvider>
            <Routes>
              <Route path="/" element={<People />} />
              <Route path="/edit/:id" element={<EditPeople />} />
              <Route path="/people/new" element={<NewPersonForm />} />
            </Routes>
          </PeopleProvider>
        </main>
      </BrowserRouter>
    </div>
  );
}

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>SF≡IR People</h1>
      </Link>
    </header>
  )
}

export default App;
