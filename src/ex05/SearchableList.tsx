import React, {useState} from "react";
import {TextField} from "@rmwc/textfield";

import {PersonCard} from "../solution/PersonCard";

// hint: to check if a string contains some substring,
// create a case insensitive regular expression
const containsSubstring = (str: string, sub: string): boolean => {
  const re = new RegExp(sub, "i");
  return re.test(str);
};

const toPersonCard = (person: Person) => (
    <PersonCard person={person} key={person.id}/>
);

type SearchableListProps = {
  people: People;
};

// Function(searchText) => Function -> filter

// export const filterPeople = function(searchText: string) {
//   console.log(searchText);
//
//   return function(person) {
//     return containsSubstring(person.firstname, searchText) ||
//         containsSubstring(person.lastname, searchText);
//   }
// }

export const filterPeople =
    (search: string) => {
      return (person: Person) =>
          containsSubstring(person.firstname, search) ||
          containsSubstring(person.lastname, search);
    }

export const SearchableList: React.FC<SearchableListProps> = ({people}) => {
  const [searchText, setSearchText] = useState("");

  const onSearchChange = event => setSearchText(event.target.value);

  const filteredList = people.filter(filterPeople(searchText));

  return (
      <>
        <main>{filteredList.map(toPersonCard)}</main>
        <footer>
          <TextField
              icon="search"
              trailingIcon={{icon: "close"}}
              label="search by name"
              value={searchText}
              onChange={onSearchChange}
          />
        </footer>
      </>
  );
};
