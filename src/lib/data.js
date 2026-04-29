export async function getAnimal() {
  const res = await fetch("http://localhost:3000/animalData.json");
  const data = await res.json();
  return data;
}
