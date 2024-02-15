import React from "react";
import { useLoaderData } from "react-router-dom";
import { PersonCard } from "../solution/PersonCard";

export const Person: React.FC = () => {
  const person = useLoaderData() as Person;
  return (
    <main>
      <PersonCard person={person} />
    </main>
  );
};
