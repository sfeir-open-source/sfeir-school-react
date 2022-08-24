import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Iconized } from '@libs/design';
import { PersonModel, updatePerson } from '../../api/person';
import styles from './people.module.scss';
import { useState } from 'react';
import useManagers from './UseManagers';

export interface EditPersonFormProps {
  person: PersonModel;
  refreshPerson: () => void;
}

/**
 *
 * @param date
 * @returns new date in format yyyy-mm-dd to satisfie the Input type="date" format
 */
const normalizeDate = (date: string): string => {
  if (date.includes('-')) return date;
  const [day, month, year] = date.split('/');
  return `${year}-${month}-${day}`;
};

/**
 *
 * @param date
 * @returns new date in format dd/mm/yyyy to satisfie the API format
 */
const unNormalizeDate = (date: string): string => {
  if (date.includes('/')) return date;
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
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

  const selectedManagerName =
    managers?.find((m) => m.id === formData.managerId)?.firstname || manager;

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updatePerson({
      ...formData,
      entryDate: unNormalizeDate(entryDate),
      birthDate: unNormalizeDate(birthDate),
      manager: selectedManagerName,
    }).then(() => refreshPerson());
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

        <Iconized icon={solid('image')}>Photo: </Iconized>
        <input type="text" name="photo" value={photo} onChange={handleChange} />

        <Iconized icon={solid('person')}>Manger: </Iconized>
        <select
          name="managerId"
          value={managerId}
          onChange={(e) => handleChange(e)}
          data-cy="select-manager"
        >
          {managers?.map((manager) => (
            <option key={manager.id} value={manager.id}>
              {manager.firstname}
            </option>
          ))}
        </select>

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
