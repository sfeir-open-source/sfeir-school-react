import {SearchableList} from "../solution/SearchableList";
import React, {useContext} from "react";
import {PeopleContext} from "./PeopleContext";

export const SearchableListContainer = () => {
  const people = useContext(PeopleContext);

  return (
      <SearchableList people={people}/>
  );
}