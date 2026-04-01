import React from "react";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer";
import RouterProvider from "./RouterProvider";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="bottom-right"/>
      <RouterProvider />
    </>
  );
};

export default App;
