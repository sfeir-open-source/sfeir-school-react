import { StrictMode } from 'react';
import './app.scss';
import { Header } from './core/components/header';

export default function App() {
  return (
    <StrictMode>
      <main className="people-application">
        <Header />
      </main>
    </StrictMode>
  );
}
