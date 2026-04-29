<<<<<<< HEAD
import FormComponent from "@/Components/ui/FormComponent";
=======
>>>>>>> f020e672f800807dbd666dd195d2216ab1a026bf
import { getAnimalById } from "@/lib/data";
import Image from "next/image";
import React from "react";


<<<<<<< HEAD
const animalDetailsPage = async ({ params }) => {
  const { id } = await params;
  const animal = await getAnimalById(id);
//   const handleBooking = (e)=>{
//     e.preventDefault();
//     alert("Booking Successful")
//   }

=======

const animalDetailsPage = async ({ params }) => {
  const { id } = await params;
  const animal = await getAnimalById(id);
>>>>>>> f020e672f800807dbd666dd195d2216ab1a026bf
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
<<<<<<< HEAD
          <h2 className="card-title text-4xl font-bold text-[#131313]">
            {animal.name}
          </h2>
=======
          <h2 className="card-title text-4xl font-bold text-[#131313]">{animal.name}</h2>
>>>>>>> f020e672f800807dbd666dd195d2216ab1a026bf
          <p className="text-xl ">{animal.description}</p>
          <p className="text-xl  text-[#244D3F]">Type: {animal.type}</p>
          <p className="text-xl  text-[#244D3F]">Price: {animal.price} TK</p>
          <p className="text-xl  text-[#244D3F]">Weight: {animal.weight}</p>
          <p className="text-xl  text-[#244D3F]">Age: {animal.age}</p>
          <p className="text-xl  text-[#244D3F]">Category: {animal.category}</p>
        </div>
      </div>
<<<<<<< HEAD
      <div className="mt-10">
        <h2 className="font-bold text-3xl mb-6 ">Booking Form</h2>
        {/* <form onSubmit={handleBooking} className="space-y-4 ">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="name"
              className="input"
              placeholder="Enter Your Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email Address</legend>
            <input
              type="email"
              className="input"
              placeholder="Type your Email"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Phone NO</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your Phone Number"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Address</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your Address"
            />
          </fieldset>
          <button className="btn bg-slate-800 text-white" >Submit</button>
        </form> */}
        <FormComponent></FormComponent>
      </div>
    </div>
=======
      
    </div>
    
>>>>>>> f020e672f800807dbd666dd195d2216ab1a026bf
  );
};

export default animalDetailsPage;
