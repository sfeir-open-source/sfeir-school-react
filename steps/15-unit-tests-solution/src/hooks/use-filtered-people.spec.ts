import { describe, expect, it } from 'vitest';
import { useFilteredPeople } from './use-filtered-people';

const people: Person[] = [
  { id: '10', firstname: 'David', lastname: 'Tennant', position: 'Doctor' } as Person,
  { id: '11', firstname: 'Matt', lastname: 'Smith', position: 'Doctor' } as Person,
  { id: '12', firstname: 'Peter', lastname: 'Capaldi', position: 'Doctor' } as Person,
  { id: '13', firstname: 'Jodie', lastname: 'Whittaker', position: 'Doctor' } as Person,
  { id: '14', firstname: 'David', lastname: 'Tennant', position: 'Doctor' } as Person,
  { id: '15', firstname: 'Ncuti', lastname: 'Gatwa', position: 'Doctor' } as Person,
];

describe('useFilteredPeople', () => {
  it('should return a list of Person', () => {
    expect(useFilteredPeople(people, '')).toHaveLength(people.length);
  });

  it.each([
    // [filter, result]
    ['', people],
    ['David', [people[0], people[4]]],
    ['Mat', [people[1]]],
    ['att', [people[1]]],
    ['att', [people[1]]],
    ['tt', [people[1], people[3]]],
    ['doctor', people],
  ])('should filter correctly %s => %o', (filter: string, expectedPeople: Person[]) => {
    expect(useFilteredPeople(people, filter)).toEqual(expectedPeople);
  });
});
