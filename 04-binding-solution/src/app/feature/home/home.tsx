import BusinessIcon from '@mui/icons-material/BusinessOutlined';
import CakeOutIcon from '@mui/icons-material/CakeOutlined';
import TrashIcon from '@mui/icons-material/DeleteOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import ManageAccountsIcon from '@mui/icons-material/ManageAccountsOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEditOutlined';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroidOutlined';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

import { PEOPLE } from '../../mocks/people.mocks';
import './home.scss';

export default function Home() {
  const [firstPeople] = PEOPLE;

  return (
    <section className="people-home">
      <Card sx={{ width: '30%' }}>
        <CardHeader
          avatar={<Avatar alt="person-photo" src={firstPeople.photo} sx={{ width: 70, height: 70 }} />}
          title={`${firstPeople.firstname} ${firstPeople.lastname}`}
          subheader={
            <div className="people-home__icons">
              <CakeOutIcon />
              <span>{firstPeople.birthDate}</span>
            </div>
          }
        />
        <CardContent>
          <div className="people-home__icons">
            <BusinessIcon />
            <span>{firstPeople.entity}</span>
          </div>
          <div className="people-home__icons">
            <ManageAccountsIcon />
            <span>{firstPeople.manager}</span>
          </div>
          <div className="people-home__icons">
            <EmailIcon />
            <span>{firstPeople.email}</span>
          </div>
          <div className="people-home__icons">
            <PhoneAndroidIcon />
            <span>{firstPeople.phone}</span>
          </div>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button type="button" variant="outlined" color="error" startIcon={<TrashIcon />}>
            Delete
          </Button>
          <Button type="button" variant="contained" color="success" startIcon={<ModeEditIcon />}>
            Update
          </Button>
        </CardActions>
      </Card>
    </section>
  );
}
