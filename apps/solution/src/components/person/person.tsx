import { PersonModel } from '../../api/person';
import { Iconized, Panel } from '@libs/design';
import styles from './person.module.scss';

import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export interface PersonProps {
  person: PersonModel;
}

export function Person({ person }: PersonProps) {
  const { id, firstname, lastname, manager, position, email, phone, photo } =
    person;

  return (
    <Panel className={styles.container} data-testid={id}>
      <div className={styles.informations}>
        <h2 className={styles.name}>
          {firstname}&nbsp;{lastname}
        </h2>
        <div className={styles.position}>{position}</div>
        <Iconized icon={solid('envelope')}>
          <a href={`mailto:${email}`}>{email}</a>
        </Iconized>
        <Iconized icon={solid('phone')}>
          <a href={`tel:${phone}`}>{phone}</a>
        </Iconized>
        {manager && <Iconized icon={solid('user')}>{manager}</Iconized>}
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
