import React, { useState } from "react";
import { Nav, Button, Form, Footer } from "../../Components";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";

const links = [
  { title: "Prekės", to: "/" },
  { title: "Rinkiniai", to: "/sets" },
  { title: "Apie mus", to: "/" },
  { title: "Kontaktai", to: "/" },
  { title: "Krepšelis", to: "/carts" },
];

const Register = () => {
  const [userInputs, setUserInputs] = useState();
  const inputs = [
    {
      type: "email",
      placeholder: "example@email.com",
      name: "email",
      id: 1,
      handleChange: (e) =>
        setUserInputs({
          ...userInputs,
          email: e.target.value.trim().toLowerCase(),
        }),
    },
    {
      type: "password",
      placeholder: "password...",
      name: "password",
      id: 2,
      handleChange: (e) =>
        setUserInputs({ ...userInputs, password: e.target.value }),
    },
    {
      type: "password",
      name: "password2",
      placeholder: "repeat password...",
      id: 3,
    },
  ];
  return (
    <>
      <Nav links={links}></Nav>
      <Form
        handleSubmit={(e) => {
          e.preventDefault();
          const password1 = e.target.elements.password.value;
          const password2 = e.target.elements.password2.value;
          if (password1 !== password2) {
            return alert("Slaptažodžiai nesutampa. Bandykite dar kartą")
          }
          fetch("http://localhost:3000/v1/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInputs),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.err) {
                alert(data.err);
              }
              alert("Registracija sėkminga");
            })
            .catch((err) => alert(err))
            .finally(() => {
              e.target.reset();
              <Navigate replace to="/login" />;
            });
        }}
        title="Registruotis"
        inputs={inputs}
      >
        <Button color="primary" type="submit">
          Registruotis
        </Button>
        <p>
          Jau turite paskyrą? Prisijunkite <Link to="/login">čia</Link>
        </p>
      </Form>
      <Footer />
    </>
  );
};

export default Register;
