import FormComponent from "@/Components/ui/FormComponent";
import { getAnimalById } from "@/lib/data";
import Image from "next/image";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const animal = await getAnimalById(id);
  return {
    title: `${animal.name} - QurbaniHat`,
    description: animal.description,
  };
};

const animalDetailsPage = async ({ params }) => {
  const { id } = await params;
  const animal = await getAnimalById(id);

  return (
    <div className="max-w-6xl mx-auto px-4 my-10">
      
 
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-base-100 shadow-sm border border-base-200 rounded-3xl overflow-hidden p-4 sm:p-6 lg:p-8">

        <div className="lg:col-span-6 w-full flex justify-center">
          <div className="relative w-full aspect-[4/3] max-w-[500px] lg:max-w-full rounded-2xl overflow-hidden bg-base-200 shadow-inner">
            <Image
              src={animal.image}
              alt={animal.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>


        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div>
            <span className="badge badge-success text-white font-bold px-3 py-2 uppercase tracking-wide text-xs mb-2">
              {animal.category || "Verified"}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-base-content leading-tight">
              {animal.name}
            </h1>
            <p className="text-base text-base-content/70 mt-3 leading-relaxed">
              {animal.description}
            </p>
          </div>

        
          <div className="grid grid-cols-2 gap-4 bg-base-200/40 p-4 rounded-xl border border-base-200/60">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-base-content/50 uppercase">Price</span>
              <span className="text-xl font-black text-success">
                ৳ {Number(animal.price).toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-base-content/50 uppercase">Weight</span>
              <span className="text-lg font-bold text-base-content">{animal.weight} KG</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-base-content/50 uppercase">Age</span>
              <span className="text-lg font-bold text-base-content">{animal.age || "N/A"}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-base-content/50 uppercase">Type / Breed</span>
              <span className="text-lg font-bold text-base-content capitalize">{animal.type}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-base-100 shadow-sm border border-base-200 rounded-3xl p-6 sm:p-8 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-extrabold text-2xl sm:text-3xl text-base-content">
            পশুটি বুকিং করুন
          </h2>
          <p className="text-sm text-base-content/60 mt-1">
            আপনার পছন্দের পশুটি বুক করতে নিচের ফর্মটি সঠিক তথ্য দিয়ে পূরণ করুন।
          </p>
        </div>
        
       
        <FormComponent />
      </div>

    </div>
  );
};

export default animalDetailsPage;