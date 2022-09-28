import { Grid } from '@libs/design';
import { useMemo, useState } from 'react';
import { usePeopleContext } from '../../contexts/PeopleContext';
import Person from '../person/person';

import style from './people.module.scss';

function normalize(text: string) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
}

export function People() {
  const people = usePeopleContext();
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPeople = useMemo(() => people?.filter(person => {
    const searchTermNormalized: string = normalize(searchTerm)
    return normalize(person.lastname).includes(searchTermNormalized) || normalize(person.firstname).includes(searchTermNormalized)
  }), [people, searchTerm])

  return (
    <>
      <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      <Grid className={style.container}>
        {filteredPeople?.map((person) => <Person key={person.id} person={person} />) ||
          'Loading ...'}
        {people && !filteredPeople?.length && <span>No results</span>}
      </Grid>
    </>
  );
}


export interface SearchBarProps {
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
}
function SearchBar({ searchTerm, onSearchTermChange }: SearchBarProps) {
  return (
    <form className={style.searchBar} role="search" aria-label='People' onSubmit={e => e.preventDefault()}>
      <label className={style.srOnly} htmlFor="searchBar">Search person</label>
      <input type="text" name="searchBar" id="searchBar" onChange={(e) => onSearchTermChange(e.target.value)} value={searchTerm} placeholder="Search…" />
    </form>
  )
}

export default People;
