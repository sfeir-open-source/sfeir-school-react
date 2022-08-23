import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Iconized } from '@libs/design';
import { PersonModel, updatePerson } from '../../api/person';
import styles from './people.module.scss';
import moment from 'moment';
import { useState } from 'react';
import useManagers from './UseManagers';

export interface EditPersonFormProps {
  person: PersonModel;
  refreshPerson: () => void;
}

const normalizeDate = (date: string): string => {
  return moment(date, ['DD/MM/YYYY', 'YYYY-MM-DD']).format('YYYY-MM-DD');
};

function EditPersonForm({ person, refreshPerson }: EditPersonFormProps) {
  const [formData, setFormData] = useState(person);
  const managers = useManagers(person.id);

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
  } = formData;

  const selectedManagerId =
    managers?.find((m) => m.firstname === formData.manager)?.id || managerId;

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    updatePerson(formData).then(() => refreshPerson());
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <img
        alt={`${firstname} ${lastname}`}
        src={photo}
        className={styles.photo}
      />
      <div className={styles.informations}>
        <Iconized icon={solid('id-card')}>Firstname: </Iconized>
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={handleChange}
        />

        <Iconized icon={solid('id-card')}>Name: </Iconized>
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={handleChange}
        />

        <Iconized icon={solid('briefcase')}>Position: </Iconized>
        <input
          type="text"
          name="position"
          value={position}
          onChange={handleChange}
        />

        <Iconized icon={solid('envelope')}>email: </Iconized>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <Iconized icon={solid('person')}>Manger: </Iconized>
        <select
          name="manager"
          value={manager}
          onChange={(e) => handleChange(e)}
        >
          {managers?.map((manager) => (
            <option key={manager.id} value={manager.firstname}>
              {manager.firstname}
            </option>
          ))}
        </select>

        <input type="hidden" name="managerId" value={selectedManagerId} />

        <Iconized icon={solid('phone')}>Phone:</Iconized>
        <input
          type="number"
          name="phone"
          value={phone}
          onChange={handleChange}
        />

        <Iconized icon={solid('birthday-cake')}>Birth date: </Iconized>
        <input
          type="date"
          name="birthDate"
          value={normalizeDate(birthDate)}
          onChange={handleChange}
        />

        <Iconized icon={solid('clock')}>Entry date:</Iconized>
        <input
          type="date"
          name="entryDate"
          value={normalizeDate(entryDate)}
          onChange={handleChange}
        />

        <Iconized icon={solid('person')}>Gender:</Iconized>
        <select
          name="gender"
          id=""
          value={gender}
          onChange={(e) => handleChange(e)}
        >
          <option value="f">Female</option>
          <option value="m">Male</option>
        </select>

        <button type="submit" className={styles['submit-btn']}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default EditPersonForm;
