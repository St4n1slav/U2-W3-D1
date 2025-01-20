class Pet {
  /**
   *
   * @param {string} petName
   * @param {string} ownerName
   * @param {string} specie
   * @param {string} breed
   */
  constructor(petName, ownerName, specie, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.specie = specie;
    this.breed = breed;
  }
  confronto(other) {
    if (this.ownerName === other.ownerName) {
      return true;
    }
    return false;
  }
}

const pets = [];

function submit() {
  let petName = document.getElementById("petName").value;
  let ownerName = document.getElementById("ownerName").value;
  let specie = document.getElementById("specie").value;
  let breed = document.getElementById("breed").value;
  let pet = new Pet(petName, ownerName, specie, breed);
  pets.push(pet);
  console.log(pets);
}
