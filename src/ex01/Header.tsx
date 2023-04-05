import React from "react";
// define Header as a React component
// return the elements as in Header.html
import logo from "../images/Header.logo.svg";

export const Header = () => (
  <>
    <header className="mdc-top-app-bar">
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section">
          <img src={logo} alt="People logo" />
        </section>
      </div>
    </header>
    <div className="mdc-top-app-bar--fixed-adjust"></div>
  </>
);
