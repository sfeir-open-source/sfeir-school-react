import { Button, Input, Title } from '@libs/design';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { addPerson, PersonModel, updatePerson } from '../../api/person';
import { PeopleActionKind, usePeopleDispatch } from '../../contexts/PeopleContext';
import styles from './new-person-form.module.scss';
import useForm from './useForm';

/* eslint-disable-next-line */
export function NewPersonForm() {
  const navigate = useNavigate()
  const { values, handleChange: handleChangeNew } = useForm({} as PersonModel)
  const dispatch = usePeopleDispatch()

  function onSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    console.log(values);

    addPerson(values).then(res => {
      console.log(res);
      dispatch({ type: PeopleActionKind.ADD, people: [res] })
      navigate('/people')
    })
  }

  return (
    <div className={"container " + styles['newPerson']}>
      <Title>New person</Title>
      <form onSubmit={(e) => onSubmit(e)}>
        <Input type="text" name="firstname" label="First Name" value={values?.firstname} onChange={handleChangeNew} required />
        <Input type="text" name="lastname" label="Last Name" value={values?.lastname} onChange={handleChangeNew} required />
        <Input type="text" name="photo" label="Picture URL" value={values?.photo} onChange={handleChangeNew} required />
        <Input type="text" name="position" label="Position" value={values?.position} onChange={handleChangeNew} />
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
