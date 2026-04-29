export async function getAnimal() {
  const res = await fetch("http://localhost:3000/animalData.json");
  const data = await res.json();
  return data;
}

export async function getAnimalById(id){
  const res = await fetch("http://localhost:3000/animalData.json");
  const data = await res.json();
  const AnimalById = data.find(animal=>animal.id === parseInt(id));
  return AnimalById;
}
