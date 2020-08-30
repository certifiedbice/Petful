import React from 'react';

export default function Pet(props) {
  const age = props.pet.age;
  const breed = props.pet.breed;
  const description = props.pet.description;
  const gender = props.pet.gender;
  const imageURL = props.pet.imageURL;
  const name = props.pet.name;
  const story = props.pet.story;

  return (
    <>
      <h3>{props.type}</h3>
      <img src={imageURL} alt="cute kitty" />
      

    </>
  )
}