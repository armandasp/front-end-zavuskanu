import React, { useState } from "react";
import { Button, Form, Footer } from "../../Components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userInputs, setUserInputs] = useState();
  const navigate = useNavigate();
  const inputs = [
    {
      type: "text",
      placeholder: "vardas",
      name: "name",
      id: 1,
      handleChange: (e) =>
        setUserInputs({
          ...userInputs,
          name: e.target.value.trim(),
        }),
    },
    {
      type: "text",
      placeholder: "pavardė",
      name: "surname",
      id: 2,
      handleChange: (e) =>
        setUserInputs({
          ...userInputs,
          surname: e.target.value.trim(),
        }),
    },
    {
      type: "email",
      placeholder: "jonas@email.com",
      name: "email",
      id: 3,
      handleChange: (e) =>
        setUserInputs({
          ...userInputs,
          email: e.target.value.trim().toLowerCase(),
        }),
    },
    {
      type: "password",
      placeholder: "slaptažodis",
      name: "password",
      id: 4,
      handleChange: (e) =>
        setUserInputs({ ...userInputs, password: e.target.value }),
    },
    {
      type: "password",
      name: "password2",
      placeholder: "pakartoti slaptažodį",
      id: 5,
    },
  ];
  return (
    <>
      <Form
        handleSubmit={(e) => {
          e.preventDefault();
          const password1 = e.target.elements.password.value;
          const password2 = e.target.elements.password2.value;
          if (password1 !== password2) {
            return alert("Slaptažodžiai nesutampa. Bandykite dar kartą");
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
              navigate("/login")
            });
        }}
        title="Registruotis"
        inputs={inputs}
      >
        <Button colorBtn="primary" type="submit">
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
