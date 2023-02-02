import React from "react";
import { Routes, Route} from "react-router-dom";
//import components
import Home from "../components/Home";
import Login from "../components/Login";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  );
};

export default AllRoutes;
