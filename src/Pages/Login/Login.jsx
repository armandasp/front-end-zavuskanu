import React, { useState } from "react";
import { Button, Form, Footer } from "../../Components";
import { Link } from "react-router-dom";

const Login = () => {
  const [userInputs, setUserInputs] = useState();

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

  return (
    <>
      {/* <Nav links={links}></Nav> */}
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
              localStorage.setItem("token", data.token);
              window.location.reload();
              window.location.replace("/");
            })
            .catch((err) => alert(err.message))
            .finally(() => e.target.reset());
        }}
        title="Prisijungti"
        inputs={inputs}
      >
        <Button colorBtn="primary" type="submit">
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
