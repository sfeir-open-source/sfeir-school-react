import People from '../components/people/people';
import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles.app}>
      <header>
        <h1>SF≡IR People</h1>
      </header>
      <main>
        <People />
      </main>
    </div>
  );
}

export default App;
