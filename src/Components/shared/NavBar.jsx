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
  return (
    <div className="w-300 mx-auto flex justify-between  mt-6">
      <div>
        <Image src={logo} alt="logo" width={80} height={80}></Image>
      </div>
      <ul className="flex justify-between items-center gap-4 text-gray-700">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/allAnimal"}>All Animal</NavLink>
        </li>
      </ul>
      {isPending ? (
        <span className="loading loading-spinner loading-xl"></span>
      ) : user ? (
        <div className="flex items-center gap-2 ">
          <div>
            <h2>Hello, {user.name}</h2>
            <h2>{user.email}</h2>
          </div>
         <Link href={'/my-profile'}>
          <Image
            src={user.image || userAvatar}
            alt="user avatar"
            width={60}
            height={60}
          ></Image>
         </Link>
          <button
            className="btn bg-purple-500 text-white"
            onClick={async () => await authClient.signOut()}
          >
            Logout
          </button>
        </div>
      ) : (
        <button className="btn bg-purple-500 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      )}
    </div>
  );
};

export default NavBar;
