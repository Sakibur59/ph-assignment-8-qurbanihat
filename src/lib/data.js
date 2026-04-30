
import animalsData from "../../public/animalData.json";

export async function getAnimal() {
  return animalsData;
}

export async function getAnimalById(id) {
  const animal = animalsData.find(animal => animal.id === parseInt(id));
  return animal;
}
