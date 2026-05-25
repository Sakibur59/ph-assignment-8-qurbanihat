"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = async (data) => {
    console.log(data);
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
    }
    if (res) {
      toast.success("🎉 Login Successful");
    }
  };

  const HandleGoogleSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/", 
    });

    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-[85vh] flex justify-center items-center bg-base-200/60 px-4 py-8">
      <div className="w-full max-w-md bg-base-100 shadow-xl border border-base-200 rounded-3xl p-6 sm:p-10 transition-all">
        

        <div className="text-center mb-8">
          <h2 className="font-black text-3xl text-base-content">
            Login Your Account
          </h2>
          <p className="text-sm text-base-content/60 mt-2">
            আপনার অ্যাকাউন্টে লগইন করে হাটের সুবিধা নিন
          </p>
        </div>

    
        <form onSubmit={handleSubmit(handleLoginFunc)} className="space-y-5 pt-4 border-t border-base-200">
          
  
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend font-semibold text-base-content/80">Email Address</legend>
            <input
              {...register("email", { required: "Email field is required" })}
              type="email"
              className={`input input-bordered w-full bg-base-100 focus:input-success transition-all ${
                errors.email ? "input-error" : ""
              }`}
              placeholder="Type your Email"
            />
            {errors.email && (
              <p className="text-xs text-error mt-1 font-medium">{errors.email.message}</p>
            )}
          </fieldset>

        
          <fieldset className="fieldset w-full relative">
            <legend className="fieldset-legend font-semibold text-base-content/80">Password</legend>
            
            <div className="relative w-full">
              <input
                {...register("password", {
                  required: "Password field is required",
                })}
                type={isShowPassword ? "text" : "password"}
                className={`input input-bordered w-full bg-base-100 focus:input-success pr-12 transition-all ${
                  errors.password ? "input-error" : ""
                }`}
                placeholder="Enter your Password"
              />
              
          
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/50 hover:text-base-content transition-colors"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-xs text-error mt-1 font-medium">{errors.password.message}</p>
            )}
          </fieldset>

         
          <div className="pt-2">
            <button className="btn btn-success text-white font-bold btn-block shadow-md shadow-success/20 hover:shadow-success/40 transition-all duration-300">
              Login
            </button>
          </div>
        </form>

  
        <div className="divider text-xs text-base-content/40 my-6">OR</div>

        
        <button
          className="btn btn-outline border-base-300 hover:bg-base-200 hover:text-base-content w-full font-bold gap-3 rounded-xl transition-all"
          onClick={HandleGoogleSignIn}
        >
          <FaGoogle className="text-red-500 text-lg" />
          Login With Google
        </button>

        
        <p className="mt-8 text-center text-sm font-medium text-base-content/70">
          Don't have an account?{" "}
          <Link href={"/register"} className="text-error hover:underline font-bold ml-1">
            Register
          </Link>
        </p>
        
      </div>
    </div>
  );
};

export default LoginPage;