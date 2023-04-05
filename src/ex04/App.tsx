import React, { Fragment, useState } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "../solution/Header";
import { PersonCard } from "../solution/PersonCard";
import { Carousel } from "./Carousel";

type AppProps = {
  people: People;
};

const ICONS = {
  carousel: "view_carousel",
  list: "view_module",
};

export const App: React.FC<AppProps> = ({ people }) => {
  const [view, setView] = useState("list");
  const toggleView = () => {
    if (view === "carousel") {
      return setView("list");
    } else {
      return setView("carousel");
    }
  };

  const Wrapper = view === "list" ? Fragment : Carousel;

  return (
    <>
      <Header>
        <TopAppBarActionItem icon={ICONS[view]} onClick={() => toggleView()} />

        {/* use "view_module" as icon for showing the list */}
      </Header>
      <main>
        <Wrapper>
          {people.map((person) => {
            return <PersonCard key={person.id} person={person} />;
          })}
        </Wrapper>
        <br />
        Rewrite the Carousel so it has no dependency on PersonCard.
      </main>
    </>
  );
};
