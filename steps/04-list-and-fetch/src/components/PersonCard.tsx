import React from 'react';
import { Card, CardContent, CardImage, CardHeader, CardInfo } from './Card';

type PersonCardProps = {
  person: Person;
};

export const PersonCard: React.FC<PersonCardProps> = ({ person }) => (
  <Card>
    <CardImage url={person.photo} desc={'face of ' + person.firstname} />
    <CardHeader
      title={
        <a href={'/person/' + person.id}>
          {person.firstname} {person.lastname}
        </a>
      }
      subTitle={person.position}
    />
    <CardContent>
      <CardInfo icon="Email">
        <a href={`mailto:${person.email}`}>{person.email}</a>
      </CardInfo>
      <CardInfo icon="Phone">
        <a href={'tel:' + person.phone}>{person.phone}</a>
      </CardInfo>
      <CardInfo icon="SupervisorAccount" desc="manager">
        <a href={'/person/' + person.managerId}>{person.manager}</a>
      </CardInfo>
    </CardContent>
  </Card>
);
