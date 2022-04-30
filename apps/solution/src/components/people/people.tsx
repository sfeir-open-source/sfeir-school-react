import { Grid } from '@libs/design';
import Person from '../person/person';
import usePeople from '../person/usePeople';

import style from './people.module.scss';

export function People() {
  const people = usePeople();

  return (
    <Grid className={style.container}>
      {people?.map((person) => <Person key={person.id} person={person} />) ||
        'Loading ...'}
    </Grid>
  );
}

export default People;
