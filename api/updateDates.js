const fs = require('fs');
const path = require('path');
const people = require('./people.json');

const normalizeDate = (date) => {
  if (date.includes('-')) return date;
  const [day, month, year] = date.split('/');
  return `${year}-${month}-${day}`;
};

const newPeople = people.people.map((person) => {
  const newPerson = { ...person };
  newPerson.entryDate = new Date(normalizeDate(person.entryDate)).toISOString();
  newPerson.birthDate = new Date(normalizeDate(person.birthDate)).toISOString();
  return newPerson;
});

fs.writeFileSync(
  path.join(__dirname, './new_people.json'),
  JSON.stringify({ people: newPeople }, null, 2)
);
