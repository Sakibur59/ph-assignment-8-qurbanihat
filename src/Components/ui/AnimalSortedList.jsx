"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AnimalSortedList = ({ animals = [] }) => {
  const [sortingType, setSortingType] = useState("");

  const sortedAnimals = [...animals].sort((a, b) => {
    if (sortingType === "asc") return a.price - b.price;
    if (sortingType === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 my-8">
     
      <div className="flex justify-center items-center gap-3 mb-10 bg-base-200/50 p-2 rounded-xl w-fit mx-auto shadow-sm">
        <button
          onClick={() => setSortingType("asc")}
          className={`btn btn-sm sm:btn-md rounded-lg font-bold transition-all duration-200 ${
            sortingType === "asc"
              ? "btn-success text-white shadow-md shadow-success/20"
              : "btn-ghost text-base-content/70 hover:bg-base-200"
          }`}
        >
          Price: Low to High
        </button>
        
        <button
          onClick={() => setSortingType("desc")}
          className={`btn btn-sm sm:btn-md rounded-lg font-bold transition-all duration-200 ${
            sortingType === "desc"
              ? "btn-success text-white shadow-md shadow-success/20"
              : "btn-ghost text-base-content/70 hover:bg-base-200"
          }`}
        >
          Price: High to Low
        </button>

        {sortingType && (
          <button 
            onClick={() => setSortingType("")} 
            className="btn btn-sm btn-circle btn-ghost text-error"
            title="Clear Filter"
          >
            ✕
          </button>
        )}
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {sortedAnimals.map((animal) => (
          <div
            key={animal.id}
            className="card bg-base-100 w-full max-w-[340px] sm:max-w-full shadow-sm hover:shadow-md border border-base-200/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
          >
            
            <figure className="relative w-full aspect-[4/3] bg-base-200">
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </figure>

            
            <div className="card-body p-5 flex-grow">
              <h2 className="card-title text-lg font-bold text-base-content line-clamp-1">
                {animal.name}
              </h2>
              <p className="text-sm text-base-content/70 line-clamp-2 mt-1 font-medium">
                {animal.description}
              </p>

              
              <div className="mt-4 pt-3 border-t border-base-200 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-base-content/60 font-medium">Weight:</span>
                  <span className="badge badge-neutral font-semibold rounded-md">{animal.weight} KG</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-base-content/50 uppercase tracking-wider">Price</span>
                  <span className="text-lg font-extrabold text-success">
                    ৳ {Number(animal.price).toLocaleString("en-IN")}
                  </span>
                </div>
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
        ))}
      </div>
    </div>
  );
};

export default AnimalSortedList;