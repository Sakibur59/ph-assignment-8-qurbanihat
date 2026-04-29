import { getAnimal } from "@/lib/data";
import Image from "next/image";
import React from "react";

const AnimalCard2 = async () => {
  const animals = await getAnimal();
  return (
    <div className="w-300 mx-auto grid grid-cols-3 gap-3">
      {animals.map((animal) => {
        return (
          <div key={animal.id} className="card bg-base-100 pt-4 w-96 shadow-sm">
            <figure>
              <Image src={animal.image} alt={animal.name} width={300} height={300} className="object-cover"></Image>
               
            </figure>
            <div className="card-body">
              <h2 className="card-title">{animal.name}</h2>
              <p className="font-semibold">
                {animal.description}
              </p>
              <p className="font-semibold">TK. {animal.price}</p>
             
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnimalCard2;
