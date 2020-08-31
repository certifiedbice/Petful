import React, {useContext} from 'react';
import Context from '../../context/petfulcontext';
import PetfulApiService from '../../services/petful-api-service';
import './pet.css';

export default function Pet(props) {
  const context = useContext(Context);

  const age = props.pet.age;
  const breed = props.pet.breed;
  const description = props.pet.description;
  const gender = props.pet.gender;
  const imageURL = props.pet.imageURL;
  const name = props.pet.name;
  const story = props.pet.story;

  const handleButtonClick = () => {
    if(props.type === 'Cat') {
      PetfulApiService.deleteCat();
    }
    if(props.type === 'Dog') {
      PetfulApiService.deleteDog();
    }
    context.setIsInLine(false);
    window.alert("Congrats! You've adopted this pet!");
  }

  return (
    <>
      <h3>{props.type}</h3>
      <div>
        <img src={imageURL} alt="cute kitty" />
      </div>
      <div>
        <span>Name: </span><span>{name}</span>
      </div>
      <div>
        <span>Gender: </span><span>{gender}</span>
      </div>
      <div>
        <span>Age: </span><span>{age}</span>
      </div>
      <div>
        <span>Breed: </span><span>{breed}</span>
      </div>
      <div>
        <span>Description: </span><span>{description}</span>
      </div>
      <div>
        <span>{name}'s story: </span><span>{story}</span>
      </div>
      {context.people[0] === context.user &&
        <button onclick={handleButtonClick}>Adopt</button>
      }
    </>
  )
}