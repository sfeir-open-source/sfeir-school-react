import MuiCard from '@mui/material/Card';
import MuiTextField from '@mui/material/TextField';
import { PeopleGrid } from '../components/PeopleGrid';
import { PersonCard } from '../components/PersonCard';
import { usePeople } from '../hooks/use-people';
import { Layout } from './Layout';

export function PeopleGridPage() {
  const people = usePeople();
  return (
    <Layout>
      <MuiCard component="section" className="search-card">
        <form>
          <MuiTextField label="Search" variant="outlined" size="small" />
        </form>
      </MuiCard>
      <PeopleGrid>
        {people.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </PeopleGrid>
    </Layout>
  );
}
