import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Iconized } from '@libs/design';
import { normalizeDate } from '@util/date-fns';
import { Link } from 'react-router-dom';
import { PersonModel } from '../../api/person';
import styles from './people.module.scss';

export interface EditPersonDisplayProps {
  person: PersonModel;
}

function EditPersonDisplay({ person }: EditPersonDisplayProps) {
  const {
    firstname,
    lastname,
    manager,
    position,
    email,
    phone,
    photo,
    entryDate,
    birthDate,
    gender,
    managerId,
  } = person;

  return (
    <div className={styles.container}>
      <img
        alt={`${firstname} ${lastname}`}
        src={photo}
        className={styles.photo}
      />
      <div className={styles.informations}>
        <h2 className={styles.name}>
          {firstname}&nbsp;{lastname}
        </h2>
        <div className={styles.position}>{position}</div>
        <Iconized icon={{ icon: solid('envelope') }}>
          <a href={`mailto:${email}`}>{email}</a>
        </Iconized>
        <Iconized icon={{ icon: solid('phone') }}>
          <a href={`tel:${phone}`}>{phone}</a>
        </Iconized>
        {manager && (
          <Iconized icon={{ icon: solid('user') }}>
            <Link to={`/edit/${managerId}`}>{manager}</Link>
          </Iconized>
        )}
        <Iconized icon={{ icon: solid('birthday-cake') }}>
          {normalizeDate(birthDate)}
        </Iconized>
        <Iconized icon={{ icon: solid('clock') }}>
          Entry date: {normalizeDate(entryDate)}
        </Iconized>
        <Iconized icon={{ icon: solid('person') }}>
          Gender:{' '}
          {gender === 'f'
            ? 'Female'
            : gender === 'm'
              ? 'Male'
              : 'Not specified'}
        </Iconized>
      </div>
    </div>
  );
}

export default EditPersonDisplay;
