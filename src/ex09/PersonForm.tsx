import React from "react";
import {Card, CardContent, CardActions, CardAction} from "../solution/Card";
import {TextField} from "@rmwc/textfield";
import {Select} from "@rmwc/select";
import {Formik, useFormikContext} from "formik";

const PersonFields: React.FC = () => {
  const {values, handleChange, setFieldValue} = useFormikContext<Person>();

  const onFirstnameChange = event => {
    setFieldValue("firstname", event.target.value.toUpperCase());
  };

  return (
      <CardContent type="person-form">
        <TextField label="first name" name="firstname" value={values.firstname} onChange={onFirstnameChange}/>
        <TextField label="last name" name="lastname" value={values.lastname} onChange={handleChange}/>
        <Select
            label="position"
            options={[
              "Director",
              "Developer",
              "Product Owner",
              "Sales",
              "Human Resources",
            ]}
            value={"Director"}
        />
        <TextField label="phone"/>
        <TextField label="email"/>
      </CardContent>
  );
};

type PersonFormProps = {
  person: Person;
};

export const PersonForm: React.FC<PersonFormProps> = ({person}) => {
  const onFormSubmit = (values) => {
    console.log(values);
  };

  return (
      <Card>
        <Formik initialValues={person} onSubmit={onFormSubmit}>

          {({handleSubmit}) => (
              <form onSubmit={handleSubmit}>
                <PersonFields/>
                <CardActions>
                  <CardAction type="submit">save</CardAction>
                  <CardAction type="reset">cancel</CardAction>
                </CardActions>
              </form>
          )}

        </Formik>
      </Card>
  );
};
