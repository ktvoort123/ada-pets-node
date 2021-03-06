// Use Node-style imports for dependencies.
const axios = require('axios');
const result = require('./result.js');

const setResult = result.setResult;
const setError = result.setError;

const BASE_URL = 'http://localhost:3000/pets/';

// Option functions.
const listPets = () => {
  axios.get(BASE_URL)
    .then((response) => {
      setResult(response.data)
    })
    .catch((error) => {
      setError("invalid url")
    })
};


const showDetails = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to show details for a pet without selecting it!");
  }

  const showDetailsURL = BASE_URL + selectedPetId
 
  axios.get(showDetailsURL)
    .then((response) => {
      setResult(response.data)
    })
    .catch((error) => {
      setError(`error code ${error.response.status}: failed to show details for the selected pet ID ${selectedPetId}`)
    })
};

const removePet = (selectedPetId) => {
  if (!selectedPetId) {
    setError("You tried to remove a pet without selecting it!");
    
  }

  const removePetURL = BASE_URL + selectedPetId
 
  axios.delete(removePetURL)
    .then((response) => {
      setResult(`successfully removed pet ID ${selectedPetId}`)
    })
    .catch((error) => {
      setError(`error code ${error.response.status}: failed to remove the selected pet ID ${selectedPetId}`)
    })
};

const addPet = (petInfo) => {
 
  axios.post(BASE_URL,petInfo)
    .then((response) => {
      setResult(response.data)
    })
    .catch((error) => {
      setError(`error code ${error.response.status}: failed to add the pet`)
    })};

// Use Node-style exports to export functions for tests and main.
module.exports = {
  listPets,
  showDetails,
  removePet,
  addPet
};
