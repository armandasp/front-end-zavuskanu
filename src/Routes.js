import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Products, Sets, Register, Login, Carts } from "./Pages";

const PageRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/sets" element={<Sets />} />
        <Route exact path="/carts" element={<Carts />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default PageRouter;
