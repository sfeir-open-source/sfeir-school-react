import { Dashboard, Palette, ViewCarousel } from '@mui/icons-material';
import MuiIconButton from '@mui/material/IconButton';
import logo from '../assets/images/Header.logo.svg';
import { Link } from 'react-router-dom';
import { useAppConfig } from '../config';

export const Header = () => {
  const { config, setConfig } = useAppConfig();
  const toggleTheme = () => setConfig({ ...config, theme: config.theme === 'blue' ? 'pink' : 'blue' });
  return (
    <header className={'top-app-bar theme-' + config.theme}>
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
        <MuiIconButton aria-label="Change theme" onClick={toggleTheme}>
          <Palette className={'variant-' + (config.theme === 'blue' ? 'pink' : 'blue')} />
        </MuiIconButton>
      </section>
    </header>
  );
};
