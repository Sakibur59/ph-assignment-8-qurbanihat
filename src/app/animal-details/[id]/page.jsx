import { getAnimalById } from "@/lib/data";
import Image from "next/image";
import React from "react";



const animalDetailsPage = async ({ params }) => {
  const { id } = await params;
  const animal = await getAnimalById(id);
  return (
    <div className="max-w-300 mx-auto my-10 rounded-xl ">
      <div className="card card-side bg-base-100 shadow-lg p-30">
        <figure className="w-full">
          <Image
            src={animal.image}
            alt={animal.name}
            width={300}
            height={300}
          ></Image>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold text-[#131313]">{animal.name}</h2>
          <p className="text-xl ">{animal.description}</p>
          <p className="text-xl  text-[#244D3F]">Type: {animal.type}</p>
          <p className="text-xl  text-[#244D3F]">Price: {animal.price} TK</p>
          <p className="text-xl  text-[#244D3F]">Weight: {animal.weight}</p>
          <p className="text-xl  text-[#244D3F]">Age: {animal.age}</p>
          <p className="text-xl  text-[#244D3F]">Category: {animal.category}</p>
        </div>
      </div>
      
    </div>
    
  );
};

export default animalDetailsPage;
