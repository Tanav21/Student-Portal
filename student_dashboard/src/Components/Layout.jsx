import React from "react";
import SideBar from "../Pages/SideBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <SideBar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
