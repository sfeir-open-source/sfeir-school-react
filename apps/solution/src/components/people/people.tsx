import { Grid } from '@libs/design';
import { Dispatch, SetStateAction, useState } from 'react';
import Person from '../person/person';
import usePeople from '../person/usePeople';

import style from './people.module.scss';

function normalize(text: string) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
}

export function People() {
  const people = usePeople();
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPeople = people?.filter(person => {
    const searchTermNormalized: string = normalize(searchTerm)
    return normalize(person.lastname).includes(searchTermNormalized) || normalize(person.firstname).includes(searchTermNormalized)
  })

  return (
    <>
      <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      <Grid className={style.container}>
        {filteredPeople?.map((person) => <Person key={person.id} person={person} />) ||
          'Loading ...'}
      </Grid>
    </>
  );
}


export interface SearchBarProps {
  searchTerm: string;
  onSearchTermChange: Dispatch<SetStateAction<string>>;
}
function SearchBar({ searchTerm, onSearchTermChange }: SearchBarProps) {

  return (
    <>
      <label htmlFor="searchBar">Search</label>
      <input className={style.searchBar} type="text" name="searchBar" id="searchBar" onChange={(e) => onSearchTermChange(e.target.value)} value={searchTerm} />
    </>
  )
}

export default People;
