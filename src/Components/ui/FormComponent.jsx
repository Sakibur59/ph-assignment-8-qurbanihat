'use client'
import React from 'react';



const FormComponent = () => {
      const handleBooking = ()=>{
    alert("Booking Successful")
  }
    return (
        <div>
             <form onSubmit={handleBooking} className="space-y-4 ">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="name"
              className="input"
              placeholder="Enter Your Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email Address</legend>
            <input
              type="email"
              className="input"
              placeholder="Type your Email"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Phone Number</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your Phone Number"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Address</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your Address"
            />
          </fieldset>
          <button className="btn bg-slate-800 text-white" >Submit</button>
        </form>
        </div>
    );
};

export default FormComponent;