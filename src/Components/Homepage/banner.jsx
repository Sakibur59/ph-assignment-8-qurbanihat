import React from "react";
import bannerImg from '@/assets/cowHat.jpg'
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 max-w-300 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-20">
        <Image src={bannerImg} alt="banner" width={400} height={400}></Image>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold w-131.5">QurbaniHat – সহজে কিনুন আপনার কোরবানির পশু</h1>
          <p className="font-semibold text-xl w-100">Browse verified cows, goats & sheep from trusted sellers. Compare price, weight & location — book your Qurbani animal from home.</p>
          <Link href={'/allAnimal'}><button className="btn btn-success font-bold">Browse</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
