import NavBar from "@/Components/shared/NavBar";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <NavBar></NavBar>
      {children}
    </div>
  );
};
export default AuthLayout;
