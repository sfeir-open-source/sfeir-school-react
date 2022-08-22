import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Iconized } from '@libs/design';
import { PersonModel } from '../../api/person';
import styles from './people.module.scss';
import moment from 'moment';

export interface EditPersonFormProps {
  person: PersonModel;
}

const normalizeDate = (date: string): string => {
  return moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
};
/**
 *
 * TODO Hanlde form submit & Handle form validation + Change
 */
function EditPersonForm({ person }: EditPersonFormProps) {
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
    <form className={styles.container}>
      <img
        alt={`${firstname} ${lastname}`}
        src={photo}
        className={styles.photo}
      />
      <div className={styles.informations}>
        <Iconized icon={solid('id-card')}>Firstname: </Iconized>
        <input type="text" name="firstname" value={firstname} />

        <Iconized icon={solid('id-card')}>Name: </Iconized>
        <input type="text" name="lastname" value={lastname} />

        <Iconized icon={solid('briefcase')}>Position: </Iconized>
        <input type="text" name="position" value={position} />

        <Iconized icon={solid('envelope')}>email: </Iconized>
        <input type="text" name="email" value={email} />

        <Iconized icon={solid('phone')}>Phone:</Iconized>
        <input type="text" name="phone" value={phone} />

        {/* {manager && (
          <Iconized icon={solid('user')}>
            <Link to={`/edit/${managerId}`}>{manager}</Link>
          </Iconized>
        )} */}
        <Iconized icon={solid('birthday-cake')}>Birth date: </Iconized>
        <input type="date" name="birthDate" value={normalizeDate(birthDate)} />

        <Iconized icon={solid('clock')}>Entry date:</Iconized>
        <input type="date" name="entryDate" value={normalizeDate(entryDate)} />

        <Iconized icon={solid('person')}>Gender:</Iconized>
        <select name="gender" id="">
          <option value="f" selected={gender === 'f' ? true : false}>
            Female
          </option>
          <option value="m" selected={gender === 'm' ? true : false}>
            Male
          </option>
        </select>

        <button type="submit" className={styles['submit-btn']}>
          Submit
        </button>
      </div>
    </form>
  );
}
export default EditPersonForm;
