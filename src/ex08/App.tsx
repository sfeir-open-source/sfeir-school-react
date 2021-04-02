import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import {Header, HeaderActionItem} from "../solution/Header";
import {Loading} from "../solution/Loading";

import {Player} from "../solution/Player";
import {Person} from "../solution/Person";
import {useIsPeopleLoading, usePerson} from "./PeopleContext";
import {SearchableListContainer} from "./SearchableList.container";
import {usePeople} from "./PeopleContext";


const PlayerContainer = () => {
  const people = usePeople();
  return <Player people={people}/>;
};

const PersonContainer = ({match: {params}}) => {
  const person = usePerson(params.id)
  return <Person person={person}/>;
};


export const App: React.FC = () => {
  const isPeopleLoading = useIsPeopleLoading();

  return (
      <>
        <Header>
          <HeaderActionItem to="/player" icon="view_carousel"/>
          <HeaderActionItem to="/list" icon="view_module"/>
        </Header>
        {isPeopleLoading ? (
            <Loading/>
        ) : (
            <Switch>
              <Route path="/list" component={SearchableListContainer} />
              <Route path="/player" component={PlayerContainer}/>
              <Route path="/person/:id" component={PersonContainer} />
              <Redirect to="/list"/>
            </Switch>
        )}
      </>
  );
};
