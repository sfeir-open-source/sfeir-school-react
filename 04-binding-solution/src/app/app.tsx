import { StrictMode } from 'react';
import './app.scss';
import { Header } from './core/components/header';
import Home from './feature/home/home';

export default function App() {
  return (
    <StrictMode>
      <main className="people-application">
        <Header />
        <section className="people-application__pages">
          <Home />
        </section>
      </main>
    </StrictMode>
  );
}
