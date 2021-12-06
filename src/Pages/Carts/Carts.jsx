import React, { useState, useEffect } from "react";
import { Footer, Table, Form, Button } from "../../Components";
import * as S from "./Carts.styles";
import { FaTrash } from "react-icons/fa";
import jwt_decode from "jwt-decode";
const token = localStorage.getItem("token");

if (token) {
  var decoded = jwt_decode(token);
} else {
  console.log("nėra tokeno");
}

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

const Carts = () => {
  const [userInputs, setUserInputs] = useState();
  const inputs = [
    {
      type: "email",
      name: "email",
      placeholder: "example@email.com",
      handleChange: (e) =>
        setUserInputs({
          ...userInputs,
          email: e.target.value.trim().toLowerCase(),
        }),
    },
    {
      type: "text",
      placeholder: "adresas",
      name: "address",
      handleChange: (e) =>
        setUserInputs({ ...userInputs, address: e.target.value }),
    },
  ];
  const [items, setItems] = useState();
  const prices = [];

  const totalPrice = () => {
    if (!prices) {
      prices.push(0.0);
    } else {
      for (let i = 0; i < items.length; i++) {
        prices.push(Number(items[i].price));
      }
      return prices.reduce((a, b) => a + b).toFixed(2);
    }
  };

  useEffect(() => {
    fetch("http://localhost:3000/v1/carts", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.err) {
          return alert("Esate neprisijungęs(-usi)");
        }
        setItems(data);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      {!items && <h1>Loading...</h1>}

      {items && items.length === 0 && (
        <h1 style={{ textAlign: "center" }}>Krepšelis tuščias</h1>
      )}

      {items && items.length !== 0 && (
        <S.DivStyle>
          <S.leftSection className="cart">
            <h1 style={{ textAlign: "center", marginTop: "0" }}>
              Prekių krepšelis
            </h1>
            <S.SectionStyle className="blocks">
              <Table
                rows={items}
                name={<FaTrash />}
                colorBtn="secondary"
                handleClick={(e) => {
                  e.preventDefault();
                  fetch(
                    `http://localhost:3000/v1/carts/delete/${Number(
                      e.currentTarget.id
                    )}`,
                    {
                      method: "DELETE",
                      headers: {
                        authorization: `Bearer ${token}`,
                      },
                    }
                  )
                    .then((res) => res.json())
                    .then((data) => {
                      console.log(e.target);
                      alert("Prekė pašalinta");
                      fetch("http://localhost:3000/v1/carts", {
                        headers: {
                          authorization: `Bearer ${token}`,
                        },
                      })
                        .then((res) => res.json())
                        .then((data) => {
                          if (data.err) {
                            return alert("Esate neprisijungęs(-usi)");
                          }
                          setItems(data);
                        })
                        .catch((err) => alert(err));
                    })
                    .catch((err) => alert(err));
                }}
              />
              <S.pStyle>Iš viso: € {prices && totalPrice()}</S.pStyle>
            </S.SectionStyle>
          </S.leftSection>
          <S.rightSection className="form">
            <Form
              title="Užsakymo forma"
              inputs={inputs}
              handleSubmit={(e) => {
                e.preventDefault();
                let allData = {
                  products: items.map((item) => item.title),
                  totalPrice: prices.reduce((a, b) => a + b).toFixed(2),
                  name: decoded.name,
                  email: userInputs.email,
                  address: userInputs.address,
                };
                console.log(allData);

                // console.log(
                //   userInputs,
                //   decoded.name,
                //   items[0].title,
                //   totalPrice()
                // );
                fetch("http://localhost:3000/v1/send/sendEmail", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(allData),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.err) {
                      alert(data.err);
                    }
                    alert(data.msg);
                  })
                  .catch((err) => alert(err));
              }}
            >
              <Button type="submit">Siųsti užklausą</Button>
            </Form>
          </S.rightSection>
        </S.DivStyle>
      )}

      <Footer />
    </div>
  );
};

export default Carts;
