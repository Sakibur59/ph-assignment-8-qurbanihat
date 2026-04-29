import { getAnimal } from "@/lib/data";
import React from "react";
import AnimalSortedList from "./AnimalSortedList";

const AnimalCard2 = async () => {
    const animals = await getAnimal();
    return (
        <div>
            <AnimalSortedList animals={animals}></AnimalSortedList>
        </div>
    );
};

export default AnimalCard2;