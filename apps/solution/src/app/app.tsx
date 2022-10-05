import People from '../components/people/people';
import EditPeople from '../components/EditPerson/EditPerson';
import styles from './app.module.scss';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { PeopleProvider } from '../contexts/PeopleContext';
import NewPersonForm from '../components/AddPerson/new-person-form';

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <PeopleProvider>

          <Outlet />

        </PeopleProvider>
      </main>
    </div>
  );
}

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>SF≡IR People</h1>
      </Link>
      <ul>
        <li><Link to="/people">People</Link></li>
      </ul>
    </header>
  )
}

export default App;
