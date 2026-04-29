"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const MyProfilePage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleUpdateData = async (data) => {
    const { data:res, error } = await authClient.updateUser({
      image: data.photo,
      name: data.name,
    });
    
    console.log(res, error);
    if (error) {
      toast.error(error.message);
    }
    if (res) {
      toast.success("Updated Successfully");
      reset();
    }
  };
  return (
    <div className="w-300 mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="px-20 py-20 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6 ">
          Update Your Profile
        </h2>
        <form onSubmit={handleSubmit(handleUpdateData)} className="space-y-4 border-t border-t-slate-200">
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

// 'use client';
// import { authClient } from '@/lib/auth-client';
// import { useState } from 'react';


// const MyProfilePage = () => {
//     const { data: session } = authClient.useSession();
//     const [loading, setLoading] = useState(false);

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         const form = e.target;

//         setLoading(true);
//         const { data, error } = await authClient.updateUser({
//             name: form.name.value,
//             image: form.image.value,
//         });
//         setLoading(false);

//         if (error) {
//             toast.error(error.message);
//             return;
//         }
//         toast.success('Profile updated successfully!');
//     };

//     return (
//         <div className="max-w-md mx-auto px-6 py-16">
//             <h1 className="text-2xl font-bold mb-8">My Profile</h1>

//             <form onSubmit={handleUpdate} className="space-y-4">
//                 <div>
//                     <label className="block text-sm font-medium mb-1">Name</label>
//                     <input
//                         name="name"
//                         type="text"
//                         defaultValue={session?.user?.name}
//                         className="input input-bordered w-full"
//                     />
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium mb-1">Photo URL</label>
//                     <input
//                         name="image"
//                         type="text"
//                         defaultValue={session?.user?.image}
//                         className="input input-bordered w-full"
//                     />
//                 </div>

//                 <div>
//                     <label className="block text-sm font-medium mb-1">Email</label>
//                     <input
//                         type="text"
//                         value={session?.user?.email}
//                         className="input input-bordered w-full"
//                         disabled
//                     />
//                 </div>

//                 <button
//                     type="submit"
//                     className="btn btn-primary w-full"
//                     disabled={loading}
//                 >
//                     {loading ? 'Updating...' : 'Update Profile'}
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default MyProfilePage;
