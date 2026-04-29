import FooterPage from "@/Components/Homepage/FooterPage";
import NavBar from "@/Components/shared/NavBar";
import React from "react";

const AllAnimalLayout = ({ children }) => {
  return (
    <div>
      <NavBar></NavBar>
      <main>{children}</main>
      <FooterPage></FooterPage>
    </div>
  );
};

export default AllAnimalLayout;
