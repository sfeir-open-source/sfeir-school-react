import React, { useEffect, useState } from "react";
import { TextField } from "@rmwc/textfield";

import { PersonCard } from "../solution/PersonCard";

// hint: to check if a string contains some substring,
// create a case insensitive regular expression
const containsSubstring = (str: string, sub: string): boolean => {
  const re = new RegExp(sub, "i");
  return re.test(str);
};

const toPersonCard = (person: Person) => (
  <PersonCard person={person} key={person.id} />
);

type SearchableListProps = {
  people: People;
};

export const SearchableList: React.FC<SearchableListProps> = ({ people }) => {
  const [query, setQuery] = useState("");
  const updateQuery = (ev) => setQuery(ev.target.value);
  const filteredPeople = people.filter((person) =>
    containsSubstring(`${person.firstname} ${person.lastname}`, query)
  );
  useEffect(() => {
    const id = setInterval(() => console.log("coucou"), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <main>{filteredPeople.map(toPersonCard)}</main>
      <footer>
        <TextField
          icon="search"
          trailingIcon={{ icon: "close", onClick: () => setQuery("") }}
          value={query}
          onChange={updateQuery}
          label="search by name"
        />
      </footer>
    </>
  );
};
