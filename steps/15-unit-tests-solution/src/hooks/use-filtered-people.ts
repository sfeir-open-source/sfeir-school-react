export function useFilteredPeople(people: Person[], filter: string) {
  const words = filter
    ?.toLocaleLowerCase()
    .split(' ')
    .filter((word) => word != undefined && word.length > 0);
  return people.filter(isPersonIncludingWords(words));
}

function isPersonIncludingWords(words: string[]) {
  if (words.length === 0) {
    return () => true;
  }
  return (person: Person) =>
    words.some(
      (word) =>
        person.firstname.toLocaleLowerCase().includes(word) ||
        person.lastname.toLocaleLowerCase().includes(word) ||
        person.position.toLocaleLowerCase().includes(word)
    );
}
