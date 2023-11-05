import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import './header.scss';

export function Header() {
  return (
    <header className="people-header">
      <AppBar component="nav" position="static">
        <img src="/images/logo-sfeir.svg" alt="sfeir-logo" height="150" width="150" />
        <section className="people-header__links">
          <Typography fontSize="20px">
            <Link href="#/people" color="#ffffff" underline="hover">
              List
            </Link>
            <Link href="#/home" color="#ffffff" underline="hover">
              Home
            </Link>
          </Typography>
        </section>
      </AppBar>
    </header>
  );
}
