import React, { useState, useEffect } from "react";
import { Block, Footer } from "../../Components";
import * as S from "./Sets.styles";
import img from "./foto.JPG";

const token = localStorage.getItem("token");

const Sets = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/v1/sets")
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
      <S.Img src={img} alt="tree" />
      <h1>Rinkiniai</h1>

      {!items && <h1>Loading...</h1>}

      {items && items.length === 0 && <h1>Nėra produktų</h1>}

      {items && (
        <S.SectionStyle className="blocks">
          <Block
            blocks={items}
            name="Į krepšelį"
            handleClick={(e) => {
              e.preventDefault();
              fetch(
                `http://localhost:3000/v1/carts/addSet/${Number(e.target.id)}`,
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
                    alert(data.err);
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

export default Sets;
