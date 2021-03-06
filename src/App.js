import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
  }
  
    onSelectPet = (id) => {
      console.log('pet selected', id);
        const pet = this.state.petList.find((pet) =>{
            return pet.id === id;
        });

      this.setState({
          currentPet: pet
      });

    };

  onRemovePet = (id) => {
    // console.log('remove pet', id);
    let updatedPets = this.state.petList;
    updatedPets = updatedPets.filter(pet => pet.id !== id);
    // console.log('updated', updatedPets);

    this.setState({
        petList: updatedPets
    });
  };



  render() {
      // destructuring
    const { currentPet } = this.state;
    
    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section>
          { /* Wave 2:  Where Pet Details should appear */ }
          {this.state.currentPet && <PetDetails currentPet={currentPet}/>}
        <section className="pet-list-wrapper">
          { /* Wave 1:  Where PetList should appear */ }
          <PetList
              pets={this.state.petList}
              onSelectPetCallback={this.onSelectPet}
              onRemovePetCallback={this.onRemovePet}
          />
        </section>
        <section className="new-pet-form-wrapper">
          { /* Wave 3:  Where NewPetForm should appear */ }
        </section>
      </main>
    );
  }
}

export default App;
