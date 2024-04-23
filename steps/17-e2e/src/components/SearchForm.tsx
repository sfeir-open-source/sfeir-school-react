import MuiCard from '@mui/material/Card';
import MuiTextField from '@mui/material/TextField';

export interface SearchFormProps {
  onChange(filter: string): void;
}

export function SearchForm({ onChange }: SearchFormProps) {
  return (
    <MuiCard component="section" className="search-card">
      <form>
        <MuiTextField
          label="Search"
          variant="outlined"
          size="small"
          onChange={(event) => onChange(event.target.value ?? '')}
        />
      </form>
    </MuiCard>
  );
}
