import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  handleAddPet(e){
    e.preventDefault();


  }
  


  render() {
    return (
      <form  className="new-pet-form">
        <h3>Add a Pet</h3>
        { /* A form should go here! */ }
        <input type="text" name="name" />
          <input type="text" name="species" />
          <input type="text" name="location" />
          <input type="text" name="about" />
          <input type="text" name="" />
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      <button>Add Pet</button>
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;