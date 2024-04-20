import { PropsWithChildren } from 'react';
import MuiCard from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import MuiCardHeader from '@mui/material/CardHeader';
import * as MuiIcons from '@mui/icons-material';

export const Card = ({ children }: PropsWithChildren) => {
  return <MuiCard component="article">{children}</MuiCard>;
};

export const CardContent = ({ children }: PropsWithChildren) => {
  return (
    <MuiCardContent component="main" className="content-type-person-info">
      {children}
    </MuiCardContent>
  );
};

export type CardImageProps = {
  url: string;
  desc: string;
};

export const CardImage = ({ url, desc }: CardImageProps) => (
  <figure>
    <img src={url} alt={desc} />
  </figure>
);

export type CardHeaderProps = {
  title: React.ReactNode;
  subTitle: React.ReactNode;
};

export const CardHeader = ({ title, subTitle }: CardHeaderProps) => (
  <MuiCardHeader
    component="header"
    title={title}
    titleTypographyProps={{ component: 'h1' }}
    subheader={subTitle}
    subheaderTypographyProps={{ component: 'h2' }}
  />
);

export type CardInfoProps = {
  icon: keyof typeof MuiIcons;
  desc?: string;
  children: React.ReactNode;
};

export const CardInfo = ({ icon, desc, children }: CardInfoProps) => {
  const Icon = MuiIcons[icon];
  return (
    <p>
      <Icon titleAccess={desc} />
      &nbsp;
      {children}
    </p>
  );
};
