import React from "react";
import { PersonCard } from "../solution/PersonCard";
import { useLocation, useMatch, useParams } from "react-router-dom";

type PersonProps = {
  people: People;
  //person: Person | undefined;
};
export const Person: React.FC<PersonProps> = ({ people }) => {
  const params = useParams();

  const person = people.find((p) => p.id === params.id);
  const isDefined = person != null;
  return (
    <main>{isDefined ? <PersonCard person={person} /> : "Not Found"}</main>
  );
};
