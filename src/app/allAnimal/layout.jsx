import FooterPage from "@/Components/Homepage/FooterPage";
import NavBar from "@/Components/shared/NavBar";
import React from "react";
import { ToastContainer } from "react-toastify";

const AllAnimalLayout = ({ children }) => {
  return (
    <div>
      <NavBar></NavBar>
      <ToastContainer />
      <main>{children}</main>
      <FooterPage></FooterPage>
    </div>
  );
};

export default AllAnimalLayout;
