import logo from '../assets/images/Header.logo.svg';

export const Header = () => {
  return (
    <header className="top-app-bar">
      <section className="top-app-bar__section">
        <img src={logo} alt="People logo" />
      </section>
    </header>
  );
};
