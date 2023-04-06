import React from "react";
import { PersonCard } from "../solution/PersonCard";

type PersonProps = {
  person: Person | undefined;
};
export const Person: React.FC<PersonProps> = ({ person }) => {
  const isDefined = person != null;
  return (
    <main>{isDefined ? <PersonCard person={person} /> : "Not Found"}</main>
  );
};
