"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash} from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterPage = () => {
    const router = useRouter()
   const [isShowPassword,setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = async (data) => {
    const { name, email, password, photo } = data;

    const { data:res, error } = await authClient.signUp.email({
      name: name, 
      email: email, 
      password: password, 
      image: photo,
      callbackURL: "/",
    });
    console.log(res,error);
    if(error){
      toast.error(error.message);
      return;
    }
    if(res){
      toast.success("Account Registered Successful");
      router.push('/');
    }
  };
  

  return (
    <div className="w-100 lg:w-300 mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-10 lg:px-20 py-20 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6 ">
          Register Your Account
        </h2>
        <form
          onSubmit={handleSubmit(handleRegisterFunc)}
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
            <legend className="fieldset-legend">Email Address</legend>
            <input
              {...register("email", { required: "Email field is required" })}
              type="email"
              className="input"
              placeholder="Type your Email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
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
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              {...register("password", {
                required: "Password field is required",
              })}
              type={isShowPassword?"text":"password"}
              className="input"
              placeholder="Enter your Password"
            />
             <span className="absolute right-4 top-4 text-sm cursor-pointer" onClick={()=>setIsShowPassword(!isShowPassword)}>
              {isShowPassword? <FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn bg-slate-800 text-white w-full">
            Register
          </button>
        </form>
       
      </div>
    </div>
  );
};

export default RegisterPage;
