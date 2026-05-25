import { getAnimal } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimalCard = async () => {
  const animals = await getAnimal();

  const listedAnimals = animals.slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto px-4 my-12">

      <div className="mb-8 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-base-content">Featured Animals</h2>
        <p className="text-sm text-base-content/60 mt-1">কোরবানির জন্য আমাদের সেরা কালেকশন সমূহ</p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {listedAnimals.map((animal) => {
          return (
            <div 
              key={animal.id} 
              className="card bg-base-100 w-full max-w-[320px] sm:max-w-full shadow-sm hover:shadow-md border border-base-200/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
        
              <figure className="relative w-full aspect-[4/3] bg-base-200">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority={false}
                />
              </figure>

       
              <div className="card-body p-5 flex-grow">
                <h2 className="card-title text-lg font-bold text-base-content line-clamp-1">
                  {animal.name}
                </h2>
                <p className="text-sm text-base-content/70 line-clamp-2 mt-1 font-medium">
                  {animal.description}
                </p>
                
       
                <div className="mt-4 pt-3 border-t border-base-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-base-content/50 uppercase tracking-wider">Price</span>
                  <span className="text-lg font-extrabold text-success">
                    ৳ {Number(animal.price).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

            
              <div className="p-5 pt-0">
                <Link href={`/animal-details/${animal.id}`} className="w-full block">
                  <button className="btn btn-success btn-outline hover:!text-white btn-block font-bold transition-all rounded-xl">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimalCard;