import { Iconized, Panel } from '@libs/design';
import { useParams } from 'react-router-dom';
import { PersonModel } from '../../api/person';
import usePerson from './UsePerson';
import styles from './people.module.scss';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import EditPersonDisplay from './EditPersonDisplay';
import EditPersonForm from './EditPersonForm';
import { useState } from 'react';

export interface EditPeopleProps {
  person: PersonModel;
}

function EditPeople() {
  const [showForm, setShowForm] = useState(false);

  const { id } = useParams();
  const [person, updatePersonAction] = usePerson(id as string);

  if (!person) return <div>Loading...</div>;

  return (
    <Panel data-cy={`person-panel-${id}`} className={styles.panel}>
      {!showForm ? (
        <EditPersonDisplay person={person} />
      ) : (
        <EditPersonForm
          person={person}
          updatePersonAction={updatePersonAction}
        />
      )}
      <div className={styles['btn-container']}>
        <Iconized
          icon={solid('pen-to-square')}
          size={'2x'}
          className={styles['edit-btn']}
          onClick={() => setShowForm(!showForm)}
          data-cy={`edit-btn-${id}`}
        />
        <Iconized
          icon={solid('person-circle-minus')}
          size={'2x'}
          className={styles['delete-btn']}
          data-cy={`delete-btn-${id}`}
        />
      </div>
    </Panel>
  );
}

export default EditPeople;
