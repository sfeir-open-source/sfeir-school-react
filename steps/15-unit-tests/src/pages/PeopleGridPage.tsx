import { PeopleGrid } from '../components/PeopleGrid';
import { PersonCard } from '../components/PersonCard';
import { usePeople } from '../hooks/use-people';
import { Layout } from './Layout';
import { SearchForm } from '../components/SearchForm';
import { useState } from 'react';
import { useFilteredPeople } from '../hooks/use-filtered-people';

export function PeopleGridPage() {
  const { people, setFilter } = usePeopleToShow();
  return (
    <Layout>
      <SearchForm onChange={setFilter} />
      <PeopleGrid>
        {people.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </PeopleGrid>
    </Layout>
  );
}

function usePeopleToShow() {
  const [filter, setFilter] = useState('');
  const people = usePeople();
  const filteredPeople = useFilteredPeople(people, filter);
  return { people: filteredPeople, setFilter };
}
