import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Products, Sets, Register, Login } from "./Pages";

const LazyCarts = React.lazy(() => import("./Pages/Carts/Carts"));

const PageRouter = () => {
  return (
    <Router>
      <Suspense fallback={() => <h1>Loading...</h1>}>
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/sets" element={<Sets />} />
          <Route exact path="/carts" element={<LazyCarts />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default PageRouter;
