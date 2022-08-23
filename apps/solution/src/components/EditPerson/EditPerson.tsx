import { Iconized, Panel } from '@libs/design';
import { useParams } from 'react-router-dom';
import { PersonModel } from '../../api/person';
import usePeopleId from './UsePerson';
import styles from './people.module.scss';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import EditPersonDisplay from './EditPersonDisplay';
import EditPersonForm from './EditPersonForm';
import { useState } from 'react';

export interface EditPeopleProps {
  person: PersonModel;
}

function EditPeople() {
  const [showForm, setShowForm] = useState(true);

  const { id } = useParams();
  const person = usePeopleId(id as string);

  if (!person) return <div>Loading...</div>;

  return (
    <div>
      <Panel data-cy={`person-panel-${id}`} className={styles.panel}>
        {!showForm ? (
          <EditPersonDisplay person={person} />
        ) : (
          <EditPersonForm person={person} />
        )}
        <div className={styles['btn-container']}>
          <Iconized
            icon={solid('pen-to-square')}
            size={'2x'}
            className={styles['edit-btn']}
            onClick={() => setShowForm(!showForm)}
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
