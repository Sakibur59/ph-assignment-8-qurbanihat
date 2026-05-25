"use client";
import React from "react";
import { toast } from "react-toastify";

const FormComponent = () => {
  const handleBooking = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const bookingData = Object.fromEntries(formData.entries());
    console.log("Booking Data Submitted:", bookingData);

    toast.success("🎉 Booking Successful!");
    e.target.reset();
  };

  return (
    <div className="w-full">
      <form onSubmit={handleBooking} className="space-y-5">
        
     
        <fieldset className="fieldset w-full">
          <legend className="fieldset-legend font-semibold text-base-content/80">Name</legend>
          <input 
            type="text" 
            name="userName"
            className="input input-bordered w-full focus:input-success bg-base-100 transition-all duration-200" 
            placeholder="Enter Your Name" 
            required
          />
        </fieldset>

      
        <fieldset className="fieldset w-full">
          <legend className="fieldset-legend font-semibold text-base-content/80">Email Address</legend>
          <input 
            type="email" 
            name="userEmail"
            className="input input-bordered w-full focus:input-success bg-base-100 transition-all duration-200" 
            placeholder="Type your Email" 
            required 
          />
        </fieldset>

      
        <fieldset className="fieldset w-full">
          <legend className="fieldset-legend font-semibold text-base-content/80">Phone Number</legend>
          <input
            type="tel"
            name="userPhone"
            className="input input-bordered w-full focus:input-success bg-base-100 transition-all duration-200"
            placeholder="Enter your Phone Number"
            required
          />
        </fieldset>

      
        <fieldset className="fieldset w-full">
          <legend className="fieldset-legend font-semibold text-base-content/80">Address</legend>
          <textarea
            name="userAddress"
            className="textarea textarea-bordered w-full h-24 focus:textarea-success bg-base-100 transition-all duration-200"
            placeholder="Enter your full delivery Address"
            required
          />
        </fieldset>

        
        <div className="pt-2">
          <button 
            type="submit" 
            className="btn btn-success text-white font-bold btn-block shadow-md shadow-success/20 hover:shadow-success/40 transition-all duration-300"
          >
            Confirm Booking
          </button>
        </div>

      </form>
    </div>
  );
};

export default FormComponent;