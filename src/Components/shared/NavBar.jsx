"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import logo from "@/assets/logo.png";
import userAvatar from "@/assets/user.png";
import { authClient } from "@/lib/auth-client";

const NavBar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;


  const menuLinks = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/allAnimal"}>All Animal</NavLink>
      </li>
      <li>
        <NavLink href={"/about"}>About</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm max-w-6xl mx-auto px-4 mb-4 rounded-xl mt-4">
     
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m4 12h8"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2 text-gray-700"
          >
            {menuLinks}
          </ul>
        </div>
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo" width={60} height={60} className="object-contain" priority />
        </Link>
      </div>

      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 font-medium text-gray-700">
          {menuLinks}
        </ul>
      </div>

      
      <div className="navbar-end">
        {isPending ? (
          <span className="loading loading-spinner loading-md text-purple-500"></span>
        ) : user ? (
          
          <div className="dropdown dropdown-end flex items-center gap-2">
            <div className="hidden md:block text-right">
              <h2 className="text-sm font-semibold text-base-content">{user.name}</h2>
              <h2 className="text-xs text-base-content/60">{user.email}</h2>
            </div>
            
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar online">
              <div className="w-10 rounded-full ring ring-purple-500 ring-offset-base-100 ring-offset-2">
                <Image
                  src={user.image || userAvatar}
                  alt="user avatar"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-56 p-3 shadow-lg gap-2 border border-base-200"
            >
              <li className="md:hidden border-b border-base-200 pb-2 mb-1">
                <span className="font-bold text-purple-600 break-all">{user.name}</span>
              </li>
              <li>
                <Link href={"/my-profile"} className="justify-between py-2">
                  Profile Update
                  <span className="badge badge-primary badge-sm">New</span>
                </Link>
              </li>
              <li>
                <button 
                  onClick={async () => await authClient.signOut()}
                  className="btn btn-error btn-sm text-white mt-2"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          
          <Link href={"/login"}>
            <button className="btn bg-purple-500 hover:bg-purple-600 text-white font-bold px-6 shadow-md shadow-purple-500/20 transition-all">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;