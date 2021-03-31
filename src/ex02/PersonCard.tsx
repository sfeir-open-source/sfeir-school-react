import React from "react";
import {Card, CardImage, CardHeader, CardInfo} from "./Card";

type PersonCardProps = {
  person: Person;
};

export const PersonCard: React.FC<PersonCardProps> = ({person}) => {
  const {
    firstname,
    lastname,
    phone,
    position,
    manager,
    managerId,
    email,
    id,
    photo
  } = person;

  const managerInfo = managerId !== "" ? (
      <CardInfo icon="supervisor_account" desc="manager">
        <a href={`/person/${managerId}`}>{manager}</a>
      </CardInfo>
  ) : null;

  return (
      <Card>
        <CardImage
            url={photo}
            desc={`face of ${firstname}`}
        />
        
        <CardHeader
            title={<a href={`/person/${id}`}>{firstname} {lastname}</a>}
            subTitle={position}
        />

        <CardInfo icon="email">
          <a href={`mailto:${email}`}>{email}</a>
        </CardInfo>

        <CardInfo icon="phone">
          <a href={`tel:${phone}`}>{phone}</a>
        </CardInfo>

        {managerInfo}

      </Card>
  );
}
