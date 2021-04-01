import React, { useState } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "../solution/Header";
import { PersonCard } from "../solution/PersonCard";

import { Carousel } from "./Carousel";

type AppProps = {
  people: People;
};

export const App: React.FC<AppProps> = ({ people }) => {
  const [isListPage, setListPage] = useState(false);

  const personCards = people.map(person => <PersonCard key={person.id} person={person} />);

  const carousel = <Carousel>{personCards}</Carousel>;

  return (
    <>
      <Header>
        <TopAppBarActionItem icon="view_carousel" onClick={() => setListPage(false)} />
        <TopAppBarActionItem icon="view_module" onClick={() => setListPage(true)} />
      </Header>
      <main>

        {isListPage ? personCards : carousel }

      </main>
    </>
  );
};
