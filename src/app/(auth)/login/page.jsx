"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {
    const [isShowPassword,setIsShowPassword] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLoginFunc = async (data) => {
    console.log(data);
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error);
    if(error){
      toast.error(error.message);
    }
    if(res){
      toast.success("SignIn Successful");
    }
  };
  const HandleGoogleSignIn = async () => {
    const {data,error} = await authClient.signIn.social({
      provider: "google",
    });
    if(error){
      toast.error(error.message);
    }
    
  };
  return (
    <div className="w-300 mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="px-20 py-20 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6 ">
          Login Your Account
        </h2>
        <form
          onSubmit={handleSubmit(handleLoginFunc)}
          className="space-y-4 border-t border-t-slate-200"
        >
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
            <span className="absolute right-3 top-4 text-sm cursor-pointer" onClick={()=>setIsShowPassword(!isShowPassword)}>
              {isShowPassword? <FaEye></FaEye>:<FaEyeSlash></FaEyeSlash>}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn bg-slate-800 text-white w-full">Login</button>
        </form>
       <button
          className="btn border-blue-500 text-blue-500 w-full mt-4"
          onClick={HandleGoogleSignIn}
        >
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <p className="mt-4 ">
          Don't Have an account?
          <Link href={"/register"} className="text-red-500">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
