import { Dashboard, Palette, ViewCarousel } from '@mui/icons-material';
import MuiIconButton from '@mui/material/IconButton';
import logo from '../assets/images/Header.logo.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="top-app-bar theme-blue">
      <section className="top-app-bar__section">
        <Link to="/">
          <img src={logo} alt="People logo" />
        </Link>
      </section>
      <section className="top-app-bar__section top-app-bar__section-menu">
        <Link to="/">
          <Dashboard />
        </Link>
        <Link to="/people">
          <ViewCarousel />
        </Link>
        <MuiIconButton aria-label="Change theme">
          <Palette className="variant-pink" />
        </MuiIconButton>
      </section>
    </header>
  );
};
