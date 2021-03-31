import React from "react";

import { Header } from "../solution/Header";

import { CarouselComponent } from "./Carousel.component";
// import { Carousel } from "../solution/ex03/Carousel.class";
// import { Carousel } from "../solution/ex03/Carousel.hooks";

type AppProps = {
  people: People;
};

export const App: React.FC<AppProps> = ({ people }) => (
  <>
    <Header />
    <main>
      <CarouselComponent people={people} />
    </main>
  </>
);
