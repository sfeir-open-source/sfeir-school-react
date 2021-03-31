import React from "react";

const Card: React.FunctionComponent<any> = props => (
    <section className="mdc-card" style={{width: "480"}}>
      <div style={{padding: "1rem"}}>
        <h1 className="mdc-typography--headline4">
          {props.title}
        </h1>
      </div>
    </section>
);

export default Card;
