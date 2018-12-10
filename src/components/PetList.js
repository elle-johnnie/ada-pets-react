import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';

const getCards = (props) =>{
  console.log(props);
  // return a full array
  return props.pets.map((pet) =>{
    return (
        // return each component
        <PetCard
          key={pet.id}
          id={pet.id}
          name={pet.name}
          species={pet.species}
          location={pet.location}
          about={pet.about}
          onSelectPetCallback={props.onSelectPetCallback}
          onRemovePetCallback={props.onRemovePetCallback}
        />
    );
  });
}

const PetList = (props) => {
  return (
    <div className="card-group">
        {getCards(props)}
    </div>
  )
};

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPetCallback: PropTypes.func, 
  onRemovePetCallback: PropTypes.func,
    
};

export default PetList;
