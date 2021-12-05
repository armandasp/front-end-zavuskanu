import React, { useState, useEffect } from "react";
import { Footer, Table } from "../../Components";
import * as S from "./Carts.styles";
import { FaTrash } from "react-icons/fa";
const token = localStorage.getItem("token");

const Carts = () => {
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
        <>
          <h1 style={{ textAlign: "center" }}>Prekių krepšelis</h1>
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
        </>
      )}
      <Footer />
    </div>
  );
};

export default Carts;
