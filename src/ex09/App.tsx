import React, { useContext } from "react";
import { Route, Routes, useParams } from "react-router-dom";

import { Header, HeaderActionItem } from "../solution/Header";
import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { Loading } from "../solution/Loading";

import { Person } from "./EditablePerson";
import { PeopleContext } from "./PeopleContext";

const ContextualList: React.FC = () => {
  const people = useContext(PeopleContext);
  return <SearchableList people={people} />;
};

const ContextualPlayer: React.FC = () => {
  const people = useContext(PeopleContext);
  return <Player people={people} />;
};

const ContextualPerson = () => {
  const { id } = useParams();
  const people = useContext(PeopleContext);
  const person = people.find((p) => p.id === id);
  return <Person person={person} />;
};

export const App: React.FC = () => {
  const people = useContext(PeopleContext);
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
