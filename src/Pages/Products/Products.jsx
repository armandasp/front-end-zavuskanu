import React, { useState, useEffect } from "react";
import { Block, Footer } from "../../Components";
import * as S from "./Products.styles";
import img from "./prekes.jpg";

const token = localStorage.getItem("token");

const Products = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/v1/products")
      .then((res) => res.json())
      .then((data) => {
        if (data.err) {
          return alert("this error");
        }
        setItems(data);
      })
      .catch((err) => alert(err));
  }, []);
  return (
    <div>
      <S.Img src={img} alt="cookies" />

      <h1>Produktai</h1>

      {!items && <h1>Loading...</h1>}

      {items && items.length === 0 && <h1>Nėra produktų</h1>}

      {items && (
        <S.SectionStyle className="blocks">
          <Block
            blocks={items}
            name="Į krepšelį"
            handleClick={(e) => {
              e.preventDefault();
              console.log(e.target);
              fetch(
                `http://localhost:3000/v1/carts/addProduct/${Number(
                  e.target.id
                )}`,
                {
                  method: "POST",
                  headers: {
                    authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(items),
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  if (!data.msg) {
                    return alert("Turite prisijungti");
                  }
                  alert("Prekė pridėta į krepšelį");
                })
                .catch((err) => alert(err));
            }}
          />
        </S.SectionStyle>
      )}
      <Footer />
    </div>
  );
};

export default Products;
