'use client'
import React from "react";
import { useForm } from "react-hook-form";

const MyProfilePage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
  return (
    <div className="w-300 mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="px-20 py-20 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6 ">
          Update Your Profile
        </h2>
        <form
         
          className="space-y-4 border-t border-t-slate-200"
        >
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              {...register("name", { required: "Name field is required" })}
              type="text"
              className="input"
              placeholder="Type your Name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              {...register("photo", {
                required: "Photo URL field is required",
              })}
              type="text"
              className="input"
              placeholder="Type your Photo URL"
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>
          <button className="btn bg-slate-800 text-white w-full">Update</button>
        </form>
       
      </div>
    </div>
  );
};

export default MyProfilePage;
