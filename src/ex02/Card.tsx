import React from "react";

export class Card extends React.Component {
  render() {
    return (
      <section className="mdc-card">
        <div className="card-content content-type-person-info">
          {this.props.children}
        </div>
      </section>
    );
  }
}

// implement these subcomponents
type CardImageProps = {
  url: string;
  desc: string;
};
export const CardImage: React.FC<CardImageProps> = ({ url, desc }) => (
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

export const CardInfo: React.FC<{
  icon: string;
  desc?: string;
  children: React.ReactNode;
}> = ({ icon, desc, children }) => (
  <p>
    <i className="rmwc-icon material-icons rmwc-icon--size-small" title={desc}>
      {icon}
    </i>
    &nbsp;
    {children}
  </p>
);
