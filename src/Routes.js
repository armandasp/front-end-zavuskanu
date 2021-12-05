import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRouter from "./Components/privateRoute";
import { Nav } from "./Components";

const LazyCarts = React.lazy(() => import("./Pages/Carts/Carts"));
const LazyProducts = React.lazy(() => import("./Pages/Products/Products"));
const LazySets = React.lazy(() => import("./Pages/Sets/Sets"));
const LazyLogin = React.lazy(() => import("./Pages/Login/Login"));
const LazyRegister = React.lazy(() => import("./Pages/Register/Register"));

const links = [
  { title: "Prekės", to: "/" },
  { title: "Rinkiniai", to: "/sets" },
  { title: "Apie mus", to: "/" },
  { title: "Kontaktai", to: "/" },
  { title: "Krepšelis", to: "/carts" },
];

const PageRouter = () => {
  return (
    <Router>
      <Nav links={links}/>

      <Suspense fallback={() => <h1>Loading...</h1>}>
        <Routes>
          <Route exact path="/" element={<LazyProducts />} />
          <Route exact path="/sets" element={<LazySets />} />
          <Route
            exact
            path="/carts"
            element={
              <PrivateRouter>
                <LazyCarts />
              </PrivateRouter>
            }
          />
          <Route exact path="/register" element={<LazyRegister />} />
          <Route exact path="/login" element={<LazyLogin />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default PageRouter;
