import FormComponent from "@/Components/ui/FormComponent";
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
          <h2 className="card-title text-4xl font-bold text-[#131313] animate__animated animate__bounce">
            {animal.name}
          </h2>
          <p className="text-xl animate__animated animate__bounce ">{animal.description}</p>
          <p className="text-xl  text-[#244D3F] animate__animated animate__bounce">Type: {animal.type}</p>
          <p className="text-xl  text-[#244D3F] animate__animated animate__bounce">Price: {animal.price} TK</p>
          <p className="text-xl  text-[#244D3F] animate__animated animate__bounce">Weight: {animal.weight}</p>
          <p className="text-xl  text-[#244D3F] animate__animated animate__bounce">Age: {animal.age}</p>
          <p className="text-xl  text-[#244D3F] animate__animated animate__bounce">Category: {animal.category}</p>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-3xl mb-6 ">Booking Form</h2>
       
        <FormComponent></FormComponent>
      </div>
    </div>
  );
};

export default animalDetailsPage;
