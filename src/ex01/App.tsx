import React from "react";

import HeaderComponent from "./Header";
// import { Header } from "../solution/ex01/Header";
import Card from "./Card";
// import { Card } from "../solution/ex01/Card";

const message = "React @ SFEIR";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <Card title={message} />
      </main>
    </>
  );
};


