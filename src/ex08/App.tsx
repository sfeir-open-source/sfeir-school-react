import React, { useState, useEffect, useContext } from "react";
import {
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
  Navigate,
  Routes,
  useParams,
} from "react-router-dom";

import { Header, HeaderActionItem } from "../solution/Header";
import { Loading } from "../solution/Loading";
import { loadPeople } from "../utils";

import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { Person } from "../solution/Person";
import { PeopleContext } from "./PeopleContext";
import { TopAppBarActionItem } from "rmwc";

export const App: React.FC = () => {
  const { people, isLoading, refetch } = useContext(PeopleContext);
  return (
    <>
      <Header>
        <HeaderActionItem to="/player" icon="view_carousel" />
        <HeaderActionItem to="/list" icon="view_module" />
        <TopAppBarActionItem icon="refresh" onClick={refetch} />
      </Header>
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/list" element={<SearchableList people={people} />} />
          <Route path="/player" element={<Player people={people} />} />
          <Route
            path="/person/:id"
            element={<PersonFromParams people={people} />}
          />
          <Route path="*" element={<Navigate to="/list" />} />
        </Routes>
      )}
    </>
  );
};

function PersonFromParams({ people }: { people: People }) {
  const { id } = useParams();
  return <Person person={people.find((p) => p.id === id)} />;
}
