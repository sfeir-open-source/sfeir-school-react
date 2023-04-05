import React from "react";
// define Card as a React component
// return the elements as in Card.html
// pass it a title prop

type CardProps = {
  title: string;
};

export const Card = (props: CardProps) => {
  return (
    <section className="mdc-card" style={{ width: 480 }}>
      <div style={{ padding: "1rem" }}>
        <h1 className="mdc-typography--headline4">{props.title}</h1>
      </div>
    </section>
  );
};
