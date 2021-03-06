import React, { useState } from "react";
import { Button, Form, Footer } from "../../Components";
import { Link } from "react-router-dom";
import * as S from "./Login.styles";

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
      <Form
        handleSubmit={(e) => {
          e.preventDefault();

          fetch(
            `${process.env.REACT_APP_URL}/v1/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userInputs),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (!data.token) {
                return alert("Duomenys neteisingi");
              }
              localStorage.setItem("token", data.token);
              window.location.reload();
              window.location.replace("/");
            })
            .catch((err) => {
              return alert("Duomenys neteisingi");
            })
            .finally(() => e.target.reset());
        }}
        title="Prisijunkite prie paskyros"
        inputs={inputs}
      >
        <Button colorBtn="primary" type="submit">
          Prisijungti
        </Button>
        <S.Par>
          Neturite paskyros? <Link to="/register">Registruotis</Link>
        </S.Par>
      </Form>
      <Footer />
    </>
  );
};

export default Login;
