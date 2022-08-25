import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Iconized } from '@libs/design';
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
        <Iconized icon={solid('envelope')}>
          <a href={`mailto:${email}`}>{email}</a>
        </Iconized>
        <Iconized icon={solid('phone')}>
          <a href={`tel:${phone}`}>{phone}</a>
        </Iconized>
        {manager && (
          <Iconized icon={solid('user')}>
            <Link to={`/edit/${managerId}`}>{manager}</Link>
          </Iconized>
        )}
        <Iconized icon={solid('birthday-cake')}>{birthDate}</Iconized>
        <Iconized icon={solid('clock')}>Entry date: {entryDate}</Iconized>
        <Iconized icon={solid('person')}>
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
