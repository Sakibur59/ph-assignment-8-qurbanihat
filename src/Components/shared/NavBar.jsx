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
    <nav className="">
      <div className="sm:text-center w-90 md:w-300 mx-auto flex justify-between items-center mt-6 ">
        <div>
          <Image src={logo} alt="logo" width={80} height={80}></Image>
        </div>
        <ul className="md:flex justify-between items-center gap-4 text-gray-700">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/allAnimal"}>All Animal</NavLink>
          </li>
          <li>
            <NavLink href={"/about"}>About</NavLink>
          </li>
        </ul>
        {isPending ? (
          <span className="loading loading-spinner loading-xl"></span>
        ) : user ? (
          <div className="lg:flex items-center gap-2 ">
            <div className="">
              <h2>Hello, {user.name}</h2>
              <h2>{user.email}</h2>
            </div>

            <Image
              src={user.image || userAvatar}
              alt="user avatar"
              width={60}
              height={60}
            ></Image>

            <button
              className="btn bg-purple-500 text-white"
              onClick={async () => await authClient.signOut()}
            >
              Logout
            </button>
            <Link href={"/my-profile"}>
              <button className="btn bg-purple-500 text-white mr-2">
                Profile Update
              </button>
            </Link>
          </div>
        ) : (
          <button className="btn bg-purple-500 text-white">
            <Link href={"/login"}>Login</Link>
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
