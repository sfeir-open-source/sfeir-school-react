import React from 'react';

// decompose this component using Card
// and appropriate subcomponents of Card to be implemented.
// define a person prop and replace static data

export const PersonCardModel: React.FC = () => (
  <article className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-bhp9pd-MuiPaper-root-MuiCard-root">
    <figure>
      <img src="https://randomuser.me/portraits/women/85.jpg" alt="face of Leanne" />
    </figure>
    <header className="MuiCardHeader-root css-185gdzj-MuiCardHeader-root">
      <div className="MuiCardHeader-content css-1qbkelo-MuiCardHeader-content">
        <h1 className="MuiTypography-root MuiTypography-h5 MuiCardHeader-title css-1qvr50w-MuiTypography-root">
          <a href="/person/5763cd4d9d2a4f259b53c901">Leanne Woodard</a>
        </h1>
        <h2 className="MuiTypography-root MuiTypography-body1 MuiCardHeader-subheader css-nrdprl-MuiTypography-root">
          Developer
        </h2>
      </div>
    </header>
    <main className="MuiCardContent-root content-type-person-info css-46bh2p-MuiCardContent-root">
      <p>
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="EmailIcon"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"></path>
        </svg>
        &nbsp;<a href="mailto:woodard.l@acme.com">woodard.l@acme.com</a>
      </p>
      <p>
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="PhoneIcon"
        >
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"></path>
        </svg>
        &nbsp;<a href="tel:0784112248">0784112248</a>
      </p>
      <p>
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
          focusable="false"
          role="img"
          viewBox="0 0 24 24"
          data-testid="SupervisorAccountIcon"
        >
          <path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5M9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3m7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13"></path>
          <title>manager</title>
        </svg>
        &nbsp;<a href="/person/5763cd4d3b57c672861bfa1f">Erika</a>
      </p>
    </main>
  </article>
);
