import React, { useState, useEffect } from "react";
import { Block, Footer } from "../../Components";
import * as S from "./Sets.styles";
import img from "./foto.JPG";

const token = localStorage.getItem("token");

const Sets = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/v1/sets`)
      .then((res) => res.json())
      .then((data) => {
        if (data.err) {
          return alert("Nepavyko rasti rinkinių");
        }
        setItems(data);
      })
      .catch((err) => alert(err));
  }, []);
  return (
    <div>
      <S.Img src={img} alt="tree" />
      
      <S.Title>Rinkiniai</S.Title>

      {!items && <h1>Loading...</h1>}

      {items && items.length === 0 && <S.Title>Nėra prekių</S.Title>}

      {items && (
        <S.SectionStyle className="blocks">
          <Block
            blocks={items}
            name="Į krepšelį"
            handleClick={(e) => {
              e.preventDefault();
              fetch(
                `${process.env.REACT_APP_URL}/v1/carts/addSet/${Number(e.target.id)}`,
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
                  return alert("Prekė pridėta į krepšelį");
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
