"use client";
import { useState } from "react";
import Image from "next/image";

const AnimalSortedList = ({ animals }) => {
  const [sortingType, setSortingType] = useState("");

  const sortedAnimals = [...animals].sort((a, b) => {
    if (sortingType === "asc") return a.price - b.price;
    if (sortingType === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <div>
      <div className="flex gap-4 mb-6 justify-center mt-10">
        <button
          onClick={() => setSortingType("asc")}
          className={`btn btn-sm ${sortingType === "asc" ? "btn-primary" : "btn"}`}
        >
          Price: Low to High
        </button>
        <button
          onClick={() => setSortingType("desc")}
          className={`btn btn-sm ${sortingType === "desc" ? "btn-primary" : "btn"}`}
        >
          Price: High to Low
        </button>
      </div>

      <div className="w-300 mx-auto grid grid-cols-3 gap-3">
        {sortedAnimals.map((animal) => (
          <div key={animal.id} className="card bg-base-100 pt-4 w-96 shadow-sm">
            <figure>
              <Image
                src={animal.image}
                alt={animal.name}
                width={300}
                height={300}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{animal.name}</h2>
              <p className="font-semibold">{animal.description}</p>
              <p className="font-semibold">TK. {animal.price}</p>
              <p className="font-semibold">Weight: {animal.weight}KG</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">See Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalSortedList;
