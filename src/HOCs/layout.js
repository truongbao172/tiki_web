import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const Layout = () => {
  const getAllCate = useSelector((state) => state.CategoryReducer.getAllCategory);
  console.log("getAllCate",getAllCate)
  return (
    <>
        <Header  dataNav = {getAllCate}/>
        <Outlet />
        <Footer />
    </>
  );
};

export default Layout;
