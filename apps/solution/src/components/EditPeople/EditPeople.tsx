import React from 'react';
import { useParams } from 'react-router-dom';

function EditPeople() {
  const { id } = useParams();
  console.log(id);
  return <div>EditPeople</div>;
}

export default EditPeople;
