"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const MyProfilePage = () => {
  const router = useRouter();
  

  const { data: session, isPending } = authClient.useSession();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({

    defaultValues: {
      name: session?.user?.name || "",
      photo: session?.user?.image || "",
    },
  });

 
  useEffect(() => {
    if (session?.user) {
      reset({
        name: session.user.name,
        photo: session.user.image,
      });
    }
  }, [session, reset]);

  const handleUpdateData = async (data) => {
    const { data: res, error } = await authClient.updateUser({
      image: data.photo,
      name: data.name,
    });

    if (error) {
      toast.error(error.message);
      return;
    }
    
    if (res) {
      toast.success("🎉 Profile Updated Successfully");
      router.push("/"); 
      router.refresh();
    }
  };

  if (isPending) {
    return (
      <div className="min-h-[70vh] flex justify-center items-center">
        <span className="loading loading-ring loading-lg text-success"></span>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] flex justify-center items-center bg-base-200/60 px-4 py-10">
      <div className="w-full max-w-md bg-base-100 shadow-xl border border-base-200 rounded-3xl p-6 sm:p-10 transition-all">
        
        
        <div className="text-center mb-8">
          <div className="avatar mb-3 justify-center">
            <div className="w-24 rounded-full ring ring-success ring-offset-base-100 ring-offset-2 bg-base-200">
              <img 
                src={session?.user?.image || "https://placeholder.co/150"} 
                alt="Profile" 
              />
            </div>
          </div>
          <h2 className="font-black text-2xl text-base-content">
            Update Your Profile
          </h2>
          <p className="text-sm text-base-content/60 mt-1">
            আপনার প্রোফাইলের তথ্য পরিবর্তন করুন
          </p>
        </div>

        
        <form 
          onSubmit={handleSubmit(handleUpdateData)} 
          className="space-y-5 pt-4 border-t border-base-200"
        >
         
          <fieldset className="fieldset w-full opacity-70">
            <legend className="fieldset-legend font-semibold text-base-content/80">Email Address (Cannot Change)</legend>
            <input
              type="email"
              value={session?.user?.email || ""}
              className="input input-bordered w-full bg-base-200 cursor-not-allowed text-base-content/60"
              disabled
            />
          </fieldset>

          
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
            <legend className="fieldset-legend font-semibold text-base-content/80">Photo URL</legend>
            <input
              {...register("photo", { required: "Photo URL field is required" })}
              type="url"
              className={`input input-bordered w-full bg-base-100 focus:input-success transition-all ${
                errors.photo ? "input-error" : ""
              }`}
              placeholder="https://example.com/avatar.jpg"
            />
            {errors.photo && (
              <p className="text-xs text-error mt-1 font-medium">{errors.photo.message}</p>
            )}
          </fieldset>

          
          <div className="pt-2">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="btn btn-success text-white font-bold btn-block shadow-md shadow-success/20 hover:shadow-success/40 transition-all duration-300 disabled:bg-base-300"
            >
              {isSubmitting ? (
                <>
                  <span className="loading loading-spinner loading-xs"></span>
                  Updating...
                </>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default MyProfilePage;
