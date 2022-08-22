import { Iconized, Panel } from '@libs/design';
import { useParams, Link } from 'react-router-dom';
import { PersonModel } from '../../api/person';
import usePeopleId from './UsePerson';
import styles from './people.module.scss';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export interface EditPeopleProps {
  person: PersonModel;
}

function EditPeople() {
  const { id } = useParams();
  const person = usePeopleId(id as string);

  if (!person) return <div>Loading...</div>;

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
    <div>
      <Panel data-cy={`person-panel-${id}`} className={styles.panel}>
        <div className={styles.container}>
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
            <Iconized icon={solid('person')}>Gender: {gender}</Iconized>
          </div>
          <img
            alt={`${firstname} ${lastname}`}
            src={photo}
            className={styles.photo}
          />
        </div>
        <div className={styles['btn-container']}>
          <Iconized
            icon={solid('pen-to-square')}
            size={'2x'}
            className={styles['edit-btn']}
          />
          <Iconized
            icon={solid('person-circle-minus')}
            size={'2x'}
            className={styles['delete-btn']}
          />
        </div>
      </Panel>
    </div>
  );
}

export default EditPeople;
