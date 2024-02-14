import React, {
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
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
  // const [filtered, setFiltered] = useState(people);
  const filtered = useMemo(
    () => people.filter((p) => p.firstname.includes(query)),
    [people, query]
  );
  const clear = useCallback((ev) => {
    setQuery("");
  }, []);
  return (
    <>
      <main>{filtered.map(toPersonCard)}</main>
      <footer>
        <TextField
          icon="search"
          trailingIcon={{
            icon: "close",
            onClick: clear,
          }}
          label="search by name"
          value={query}
          onChange={(ev) => {
            setQuery(ev.currentTarget.value);
            // setFiltered(
            //   people.filter((p) => p.firstname.includes(ev.currentTarget.value))
            // );
          }}
        />
      </footer>
    </>
  );
};
