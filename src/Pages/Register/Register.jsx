import React, { useState } from "react";
import { Nav, Button, Form, Footer } from "../../Components";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";

const links = [
  { title: "Pradžia", to: "/" },
  { title: "Apie mus", to: "/add" },
  { title: "Prisijungti", to: "/login" },
  { title: "Registruotis", to: "/register" },
];

const Register = () => {
  const [userInputs, setUserInputs] = useState();
  const inputs = [
    {
      type: "text",
      placeholder: "Jonas Jonaitis",
      handleChange: (e) =>
        setUserInputs({
          ...userInputs,
          fullname: e.target.value.trim().toLowerCase(),
        }),
    },
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
  return (
    <>
      <Nav links={links}></Nav>
      <Form
        handleSubmit={(e) => {
          e.preventDefault();
          console.log(userInputs);
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
        title="Register"
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
