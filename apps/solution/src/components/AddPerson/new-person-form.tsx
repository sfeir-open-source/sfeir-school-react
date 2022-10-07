import { Button, InputLabel, Title } from '@libs/design';
import { useNavigate } from 'react-router-dom';
import { addPerson, PersonModel } from '../../api/person';
import { PeopleActionKind, usePeopleDispatch } from '../../contexts/PeopleContext';
import styles from './new-person-form.module.scss';
import useForm from './useForm';

/* eslint-disable-next-line */
export function NewPersonForm() {
  const navigate = useNavigate()
  const dispatch = usePeopleDispatch()
  const { values, handleChange: handleChangeNew, errors, onSubmit } = useForm(
    {} as PersonModel,
    {
      "firstname": (value: string) => value.length > 2,
      "lastname": (value: string) => value.length > 2,
      "photo": (value: string) => value.startsWith("http"),
      "position": (value: string) => value.length > 0 ? value.length > 2 : true
    },
    (values) => {
      addPerson(values).then(res => {
        console.log(res);
        dispatch({ type: PeopleActionKind.ADD, people: [res] })
        navigate('/people')
      })
    }
  )

  return (
    <div className={"container " + styles['newPerson']}>
      <Title>New person</Title>
      <form onSubmit={(e) => onSubmit(e)}>
        <InputLabel error={errors.firstname} name="firstname" label="First Name" value={values?.firstname} onChange={handleChangeNew} required />
        <InputLabel error={errors.lastname} name="lastname" label="Last Name" value={values?.lastname} onChange={handleChangeNew} required />
        <InputLabel error={errors.photo} name="photo" label="Picture URL" value={values?.photo} onChange={handleChangeNew} required />
        <InputLabel error={errors.position} name="position" label="Position" value={values?.position} onChange={handleChangeNew} />
        {/*
        "entryDate": "04/10/2015",
        "birthDate": "22/01/1963",
        "gender": "m",
        "email": "salinas.c@acme.com",
        "phone": "0145652522",
        "isManager": false,
        "manager": "Erika",
        "managerId": "5763cd4d3b57c672861bfa1f" */}
        <Button className={styles['full-width']}>SUBMIT</Button>
      </form>
    </div>
  );
}

export default NewPersonForm;
