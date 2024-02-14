import React, { ReactNode } from "react";

export const Card: React.FC = ({ children }) => (
  <section className="mdc-card">
    <div className="card-content content-type-person-info">{children}</div>
  </section>
);

type CardImageProps = {
  url: string;
  desc: string;
};

// implement these subcomponents

export const CardImage = ({ url, desc }: CardImageProps) => (
  <figure>
    <img src={url} alt={desc} />
  </figure>
);

export const CardHeader: React.FC<{
  title: React.ReactNode;
  subTitle: React.ReactNode;
}> = ({ title, subTitle }) => (
  <header>
    <h1 className="mdc-typography--headline5">{title}</h1>
    <h2 className="mdc-typography--subtitle1">{subTitle}</h2>
  </header>
);

type CardInfoProps = {
  icon: string;
  desc?: string;
  children?: ReactNode;
};

export const CardInfo = ({ icon, desc, children }: CardInfoProps) => (
  <p>
    <i
      className="rmwc-icon material-icons rmwc-icon--size-small"
      title={desc ?? icon}
    >
      {icon}
    </i>
    &nbsp;{children}
  </p>
);
