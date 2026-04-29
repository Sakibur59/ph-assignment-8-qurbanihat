import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-green-800 mb-4">
        About QurbaniHat
      </h1>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        QurbaniHat is a trusted online livestock booking platform in Bangladesh.
        We make it easy for families to find and book healthy, verified animals
        for Qurbani — without leaving home.
      </p>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        আমরা সারা বাংলাদেশের যাচাইকৃত খামারিদের সাথে সরাসরি কাজ করি। প্রতিটি পশু
        স্বাস্থ্য পরীক্ষিত এবং সঠিক দামে পাওয়া যায়।
      </p>
      <Link href={'/allAnimal'} >
      <button className="btn btn-primary">Browse</button>
      </Link>
    </div>
  );
};

export default AboutPage;
