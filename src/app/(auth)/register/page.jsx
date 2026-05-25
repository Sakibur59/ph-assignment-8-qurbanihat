"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const router = useRouter();
  const [isShowPassword, setIsShowPassword] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = async (data) => {
    const { name, email, password, photo } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });

    console.log(res, error);
    if (error) {
      toast.error(error.message);
      return;
    }
    if (res) {
      toast.success("🎉 Account Registered Successfully!");
      router.push('/');
    }
  };

  return (
    <div className="min-h-[85vh] flex justify-center items-center bg-base-200/60 px-4 py-10">
      <div className="w-full max-w-md bg-base-100 shadow-xl border border-base-200 rounded-3xl p-6 sm:p-10 transition-all">
        
      
        <div className="text-center mb-8">
          <h2 className="font-black text-3xl text-base-content">
            Register Your Account
          </h2>
          <p className="text-sm text-base-content/60 mt-2">
            আজই যোগ দিন QurbaniHat-এ এবং আপনার পশু বুক করুন
          </p>
        </div>

   
        <form 
          onSubmit={handleSubmit(handleRegisterFunc)} 
          className="space-y-5 pt-4 border-t border-base-200"
        >
     
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend font-semibold text-base-content/80">Full Name</legend>
            <input
              {...register("name", { required: "Name field is required" })}
              type="text"
              className={`input input-bordered w-full bg-base-100 focus:input-success transition-all ${
                errors.name ? "input-error" : ""
              }`}
              placeholder="Type your Name"
            />
            {errors.name && (
              <p className="text-xs text-error mt-1 font-medium">{errors.name.message}</p>
            )}
          </fieldset>

   
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


          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend font-semibold text-base-content/80">Photo URL</legend>
            <input
              {...register("photo", {
                required: "Photo URL field is required",
              })}
              type="url"
              className={`input input-bordered w-full bg-base-100 focus:input-success transition-all ${
                errors.photo ? "input-error" : ""
              }`}
              placeholder="https://example.com/photo.jpg"
            />
            {errors.photo && (
              <p className="text-xs text-error mt-1 font-medium">{errors.photo.message}</p>
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
                type="button" // সাবমিট ইভেন্ট ট্রিগার রোধ করার জন্য
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
              Create Account
            </button>
          </div>
        </form>

 
        <p className="mt-6 text-center text-sm font-medium text-base-content/70">
          Already have an account?{" "}
          <Link href={"/login"} className="text-success hover:underline font-bold ml-1">
            Login
          </Link>
        </p>
        
      </div>
    </div>
  );
};

export default RegisterPage;