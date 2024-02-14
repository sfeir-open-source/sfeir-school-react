import React, { useState } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "../solution/Header";
import { PersonCard } from "../solution/PersonCard";

import { Carousel } from "./Carousel";

type AppProps = {
  people: People;
};

const VIEWS = {
  list: "view_module",
  carousel: "view_carousel",
} as const;

export const App: React.FC<AppProps> = ({ people }) => {
  const [currentView, setView] = useState<keyof typeof VIEWS>("list");

  const nextView = currentView === "list" ? "carousel" : "list";

  return (
    <>
      <Header>
        <TopAppBarActionItem
          icon={VIEWS[nextView]}
          onClick={() => setView(nextView)}
        />
        {/* use "view_module" as icon for showing the list */}
      </Header>
      <main>
        {currentView === "list" ? (
          <div>
            {people.map((person) => (
              <PersonCard person={person} key={person.id} />
            ))}
          </div>
        ) : (
          <Carousel>
            {people.map((person) => (
              <PersonCard person={person} key={person.id} />
            ))}
          </Carousel>
        )}
      </main>
    </>
  );
};
