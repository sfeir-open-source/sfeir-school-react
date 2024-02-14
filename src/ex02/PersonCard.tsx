import React from "react";
import { Card, CardImage, CardHeader, CardInfo } from "./Card";

type PersonCardProps = {
  person: Person;
};

export const PersonCard: React.FC<PersonCardProps> = ({ person }) => (
  <Card>
    <CardImage url={person.photo} desc={`face of ${person}`} />
    <CardHeader
      title={
        <a href={`/person/${person.id}`}>
          {person.firstname} {person.lastname}
        </a>
      }
      subTitle={person.position}
    />
    <CardInfo icon="email">
      <a href="mailto:Leanne.Woodard@BIOSPAN.com">woodard.l@acme.com</a>
    </CardInfo>
    <CardInfo icon="phone">
      <a href="tel:0784112248">0784112248</a>
    </CardInfo>
    <CardInfo icon="supervisor_account" desc="manager">
      <a href="/person/5763cd4d3b57c672861bfa1f">Erika</a>
    </CardInfo>
  </Card>
);
