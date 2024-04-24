import MuiButton from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import MuiCardActions from '@mui/material/CardActions';
import MuiCardContent from '@mui/material/CardContent';
import MuiCardHeader from '@mui/material/CardHeader';
import MuiFormControl from '@mui/material/FormControl';
import MuiInputLabel from '@mui/material/InputLabel';
import MuiInput from '@mui/material/Input';
import MuiSelect from '@mui/material/Select';
import MuiMenuItem from '@mui/material/MenuItem';
import { useForm } from 'react-hook-form';

type FormValues = Pick<Person, 'id' | 'firstname' | 'lastname' | 'position' | 'email'>;
interface EditPersonFormCardProps {
  person: Person;
  onSubmit(form: FormValues): void;
}

export function EditPersonFormCard({ person, onSubmit }: EditPersonFormCardProps) {
  const { register, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      id: person.id,
      email: person.email,
      firstname: person.firstname,
      lastname: person.lastname,
      position: person.position,
    },
  });
  const values = watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="edit-person">
      <MuiCard>
        <MuiCardHeader
          component="header"
          title={`Edit ${person.firstname} ${person.lastname}`}
          titleTypographyProps={{ component: 'h2' }}
        />
        <MuiCardContent>
          <MuiInput {...register('id')} type="hidden" />
          <MuiFormControl>
            <MuiInputLabel htmlFor="firstname">Firstname</MuiInputLabel>
            <MuiInput id="firstname" {...register('firstname')} />
          </MuiFormControl>
          <MuiFormControl>
            <MuiInputLabel htmlFor="lastname">Lastname</MuiInputLabel>
            <MuiInput id="lastname" {...register('lastname')} />
          </MuiFormControl>
          <MuiFormControl>
            <MuiInputLabel htmlFor="email">Email</MuiInputLabel>
            <MuiInput id="email" {...register('email')} />
          </MuiFormControl>
          <MuiFormControl>
            <MuiInputLabel htmlFor="position">Position</MuiInputLabel>
            <MuiSelect id="position" {...register('position')} value={values.position}>
              <MuiMenuItem value="Developer">Developer</MuiMenuItem>
              <MuiMenuItem value="Sales">Sales</MuiMenuItem>
              <MuiMenuItem value="Product Owner">Product Owner</MuiMenuItem>
              <MuiMenuItem value="Human Resources">Human Resources</MuiMenuItem>
              <MuiMenuItem value="Director">Director</MuiMenuItem>
            </MuiSelect>
          </MuiFormControl>
        </MuiCardContent>
        <MuiCardActions>
          <MuiButton type="submit">Save</MuiButton>
        </MuiCardActions>
      </MuiCard>
    </form>
  );
}
