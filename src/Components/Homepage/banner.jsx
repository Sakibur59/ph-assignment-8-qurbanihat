import React from "react";
import bannerImg from '@/assets/cowHat.jpg';
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="hero bg-gradient-to-r from-base-100 to-base-200 min-h-[70vh] rounded-3xl my-8 max-w-6xl mx-auto shadow-sm overflow-hidden px-4 sm:px-8">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between items-center gap-12 lg:gap-20 py-12">
        
        
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative group max-w-[400px] w-full aspect-square rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.02]">
            <Image 
              src={bannerImg} 
              alt="Qurbani Hat Banner" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        
        
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-base-content leading-tight">
            QurbaniHat – সহজে কিনুন আপনার <span className="text-success">কোরবানির পশু</span>
          </h1>
          
          <p className="text-base sm:text-lg text-base-content/80 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Browse verified cows, goats & sheep from trusted sellers. Compare price, weight & location — book your Qurbani animal from home.
          </p>
          
          <div className="pt-2">
            <Link href='/allAnimal'>
              <button className="btn btn-success btn-lg text-white font-bold px-8 shadow-lg shadow-success/20 hover:shadow-success/40 transition-all duration-300 transform hover:-translate-y-0.5">
                Browse Animals
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;