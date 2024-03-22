import MuiCard from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import MuiTypography from '@mui/material/Typography';

export type CardProps = {
  title: string;
};

export const Card = ({ title }: CardProps) => {
  return (
    <article className="MuiCard-root" style={{ width: '480' }}>
      <div className="MuiCardContent-root" style={{ padding: '1rem' }}>
        <h1 className="MuiTypography-root MuiTypography-h1">{title}</h1>
      </div>
    </article>
  );
};

export const CardWithMui = ({ title }: CardProps) => {
  return (
    <MuiCard>
      <MuiCardContent>
        <MuiTypography variant="h5">{title}</MuiTypography>
      </MuiCardContent>
    </MuiCard>
  );
};
