import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import logo from '@/assets/logo.png'

const NavBar = () => {
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
          <NavLink href={"/about-us"}>All Animal</NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-2">
        <button className="btn bg-blue-500 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
