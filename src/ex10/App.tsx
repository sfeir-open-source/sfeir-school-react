import React from "react";
import { Route, Routes, useParams } from "react-router-dom";

import { Header, HeaderActionItem } from "../solution/Header";
import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { Loading } from "../solution/Loading";
import { Person } from "../solution/EditablePerson";

const ContextualList: React.FC = () => {
  const people = [];
  return <SearchableList people={people} />;
};

const ContextualPlayer: React.FC = () => {
  const people = [];
  return <Player people={people} />;
};

const ContextualPerson = () => {
  const { id } = useParams();
  const people = [];
  const person = people.find((p) => p.id === id);

  // TODO: call mutateAsync function from useMutation
  const onUpdate = (updated: Person) => {
    console.log("updated person:", updated);
    return Promise.resolve();
  };
  return <Person person={person} onUpdate={onUpdate} />;
};

export const App: React.FC = () => {
  // TODO: implement usePeople to load & store people
  const people = [];
  return (
    <>
      <Header>
        <HeaderActionItem to="/player" icon="view_carousel" />
        <HeaderActionItem to="/list" icon="view_module" />
      </Header>
      {people.length === 0 ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/list" element={<ContextualList />} />
          <Route path="/player" element={<ContextualPlayer />} />
          <Route path="/person/:id" element={<ContextualPerson />} />
        </Routes>
      )}
    </>
  );
};
