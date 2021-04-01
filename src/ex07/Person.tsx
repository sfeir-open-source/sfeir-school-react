import React from "react";
import {useParams} from "react-router-dom";
import {PersonCard} from "../solution/PersonCard";

export const Person: React.FC<{ people: People }> = ({ people }) => {
  const { personId } = useParams<{ personId: string }>();

  const person = people.find(p => p.id === personId);

  return (
      <main>
        {
          person ? <PersonCard person={person}/> : "not found"
        }
      </main>
  );
};
