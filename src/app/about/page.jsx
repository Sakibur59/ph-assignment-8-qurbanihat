import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold text-success uppercase tracking-widest bg-success/10 px-3 py-1 rounded-full">
          Who We Are
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-base-content mt-3 mb-6">
          About <span className="text-success">QurbaniHat</span>
        </h1>
        <p className="text-base sm:text-lg text-base-content/80 leading-relaxed font-medium">
          QurbaniHat is a trusted online livestock booking platform in Bangladesh.
          We make it easy for families to find and book healthy, verified animals
          for Qurbani — without leaving home.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-base-200/50 p-6 sm:p-8 rounded-2xl border border-base-200/60 flex flex-col justify-center">
          <p className="text-lg sm:text-xl font-semibold text-success mb-2">আমাদের লক্ষ্য</p>
          <p className="text-base-content/80 font-medium leading-relaxed">
            আমরা সারা বাংলাদেশের যাচাইকৃত খামারিদের সাথে সরাসরি কাজ করি। প্রতিটি পশু
            সঠিক নিয়মে স্বাস্থ্য পরীক্ষিত এবং ন্যায্য মূল্যে ক্রেতাদের কাছে পৌঁছে দেওয়াই আমাদের মূল লক্ষ্য।
          </p>
        </div>

        <div className="bg-base-200/50 p-6 sm:p-8 rounded-2xl border border-base-200/60 flex flex-col justify-center">
          <p className="text-lg sm:text-xl font-semibold text-success mb-2">কেন আমাদের বেছে নিবেন?</p>
          <ul className="space-y-1 text-base-content/80 font-medium">
            <li>✓ ১০০% যাচাইকৃত ও সুস্থ পশুর নিশ্চয়তা</li>
            <li>✓ খামারিদের সাথে সরাসরি যোগাযোগের সুবিধা</li>
            <li>✓ ঘরে বসেই বুকিং ও নিরাপদ পেমেন্ট সিস্টেম</li>
          </ul>
        </div>
      </div>


      <div className="stats stats-vertical sm:stats-horizontal shadow-sm border border-base-200 w-full mb-12 bg-base-100 rounded-2xl">
        <div className="stat text-center sm:text-left">
          <div className="stat-title font-medium">Verified Farmers</div>
          <div className="stat-value text-success font-black text-3xl">50+</div>
          <div className="stat-desc font-medium">Trusted partners nationwide</div>
        </div>
        
        <div className="stat text-center sm:text-left">
          <div className="stat-title font-medium">Happy Customers</div>
          <div className="stat-value text-success font-black text-3xl">1,200+</div>
          <div className="stat-desc font-medium">Successful bookings last year</div>
        </div>
        
        <div className="stat text-center sm:text-left">
          <div className="stat-title font-medium">Animal Health</div>
          <div className="stat-value text-success font-black text-3xl">100%</div>
          <div className="stat-desc font-medium">Certified by expert vets</div>
        </div>
      </div>


      <div className="text-center">
        <Link href={'/allAnimal'}>
          <button className="btn btn-success text-white font-bold px-8 btn-md sm:btn-lg shadow-lg shadow-success/20 hover:shadow-success/40 transition-all duration-300 transform hover:-translate-y-0.5 rounded-xl">
            Browse Animals
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;