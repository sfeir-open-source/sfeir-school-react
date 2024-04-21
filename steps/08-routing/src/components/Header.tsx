import { Dashboard, ViewCarousel } from '@mui/icons-material';
import logo from '../assets/images/Header.logo.svg';

export const Header = () => {
  return (
    <header className="top-app-bar">
      <section className="top-app-bar__section">
        <img src={logo} alt="People logo" />
      </section>
      <section className="top-app-bar__section top-app-bar__section-menu">
        <a href="#">
          <Dashboard />
        </a>
        <a href="#">
          <ViewCarousel />
        </a>
      </section>
    </header>
  );
};
