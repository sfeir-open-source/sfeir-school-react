import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Iconized } from '@libs/design';
import { PersonModel } from '../../api/person';
import styles from './people.module.scss';
import { useState } from 'react';
import useManagers from './UseManagers';
import { normalizeDate } from '../../utils/date';

export interface EditPersonFormProps {
  person: PersonModel;
  updatePersonAction: (person: PersonModel) => void;
}

function EditPersonForm({ person, updatePersonAction }: EditPersonFormProps) {
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updatePersonAction({
      ...formData,
      entryDate: new Date(formData.entryDate).toISOString(),
      birthDate: new Date(formData.birthDate).toISOString(),
      manager: selectedManagerName,
    });
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <img
        alt={`${firstname} ${lastname}`}
        src={photo}
        className={styles.photo}
      />
      <div className={styles.informations}>
        <Iconized icon={{ icon: solid('id-card') }}>
          <label htmlFor="firstname">Firstname:</label>
        </Iconized>
        <input
          id="firstname"
          type="text"
          name="firstname"
          value={firstname}
          onChange={handleChange}
        />

        <Iconized icon={{ icon: solid('id-card') }}>
          <label htmlFor="lastname">Lastname:</label>
        </Iconized>
        <input
          id="lastname"
          type="text"
          name="lastname"
          value={lastname}
          onChange={handleChange}
        />

        <Iconized icon={{ icon: solid('briefcase') }}>
          <label htmlFor="position">Position:</label>
        </Iconized>
        <input
          id="position"
          type="text"
          name="position"
          value={position}
          onChange={handleChange}
        />

        <Iconized icon={{ icon: solid('envelope') }}>
          <label htmlFor="email">Email:</label>
        </Iconized>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <Iconized icon={{ icon: solid('image') }}>
          <label htmlFor="photo">Picture:</label>
        </Iconized>
        <input
          id="photo"
          type="text"
          name="photo"
          value={photo}
          onChange={handleChange}
        />

        <Iconized icon={{ icon: solid('person') }}>
          <label htmlFor="manager">Manager:</label>
        </Iconized>
        <select
          id="manager"
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

        <Iconized icon={{ icon: solid('phone') }}>
          <label htmlFor="phone">Phone:</label>
        </Iconized>
        <input
          id="phone"
          type="number"
          name="phone"
          value={phone}
          onChange={handleChange}
        />

        <Iconized icon={{ icon: solid('birthday-cake') }}>
          <label htmlFor="birthDate">Birthdate:</label>
        </Iconized>
        <input
          id="birthDate"
          type="date"
          name="birthDate"
          value={normalizeDate(birthDate)}
          onChange={handleChange}
        />

        <Iconized icon={{ icon: solid('clock') }}>
          <label htmlFor="entryDate">Entry date:</label>
        </Iconized>
        <input
          id="entryDate"
          type="date"
          name="entryDate"
          value={normalizeDate(entryDate)}
          onChange={handleChange}
        />

        <Iconized icon={{ icon: solid('person') }}>
          <label htmlFor="gender">Gender:</label>
        </Iconized>
        <select
          name="gender"
          id="gender"
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
