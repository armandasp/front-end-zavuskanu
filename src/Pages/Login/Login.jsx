import React, { useState, useContext } from "react";
import { Nav, Button, Form, Footer } from "../../Components";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/Auth";
import { useNavigate } from "react-router-dom";

const links = [
  { title: "Prekės", to: "/" },
  { title: "Rinkiniai", to: "/sets" },
  { title: "Apie mus", to: "/" },
  { title: "Kontaktai", to: "/" },
  { title: "Krepšelis", to: "/carts" },
];

const Login = () => {
  const [userInputs, setUserInputs] = useState();
  const navigate = useNavigate();

  const inputs = [
    {
      type: "email",
      placeholder: "example@email.com",
      handleChange: (e) =>
        setUserInputs({
          ...userInputs,
          email: e.target.value.trim().toLowerCase(),
        }),
    },
    {
      type: "password",
      placeholder: "password...",
      handleChange: (e) =>
        setUserInputs({ ...userInputs, password: e.target.value }),
    },
  ];

  const authContext = useContext(AuthContext);
  return (
    <>
      <Nav links={links}></Nav>
      <Form
        handleSubmit={(e) => {
          e.preventDefault();

          fetch("http://localhost:3000/v1/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInputs),
          })
            .then((res) => res.json())
            .then((data) => {
              if (!data.token) {
                return alert(data.err);
              }
              alert("Sėkmingai prisijungėte");
              authContext.setToken(data.token);
              navigate("/");
            })
            .catch((err) => alert(err.message))
            .finally(() => e.target.reset());
        }}
        title="Prisijungti"
        inputs={inputs}
      >
        <Button color="primary" type="submit">
          Prisijungti
        </Button>
        <p>
          Neturite paskyros? <Link to="/register">Registruotis</Link>
        </p>
      </Form>
      <Footer />
    </>
  );
};

export default Login;
