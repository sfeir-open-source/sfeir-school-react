import { PersonModel } from '../../api/person';
import { Iconized, Panel } from '@libs/design';
import styles from './person.module.scss';
import { Link } from 'react-router-dom';

import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export interface PersonProps {
  person: PersonModel;
}

export function Person({ person }: PersonProps) {
  const { id, firstname, lastname, manager, position, email, phone, photo } =
    person;

  return (
    <Panel className={styles.container} data-cy={`person-panel-${id}`}>
      <div className={styles.informations}>
        <h2 className={styles.name}>
          <Link to={`/edit/${id}`}>
            {firstname}&nbsp;{lastname}
          </Link>
        </h2>
        <div className={styles.position}>{position}</div>
        <Iconized icon={{ icon: solid('envelope') }}>
          <a href={`mailto:${email}`}>{email}</a>
        </Iconized>
        <Iconized icon={{ icon: solid('phone') }}>
          <a href={`tel:${phone}`}>{phone}</a>
        </Iconized>
        {manager && (
          <Iconized icon={{ icon: solid('user') }}>{manager}</Iconized>
        )}
      </div>
      <img
        alt={`${firstname} ${lastname}`}
        src={photo}
        className={styles.photo}
      />
    </Panel>
  );
}

export default Person;
