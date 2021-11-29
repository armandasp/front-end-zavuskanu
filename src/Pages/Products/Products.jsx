import React, { useState, useEffect, useContext } from "react";
import { Nav, Block, Footer } from "../../Components";
import * as S from "./Products.styles";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/Auth";

const links = [
  { title: "Pradžia", to: "/" },
  { title: "Apie mus", to: "/add" },
  { title: "Prisijungti", to: "/login" },
  { title: "Registruotis", to: "/register" },
];

const Products = () => {
  const authContext = useContext(AuthContext);
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
      <Nav links={links} />

      <h1>Produktai</h1>

      <Link to="/">Produktai</Link>
      <Link to="/sets">Rinkiniai</Link>
      <Link to="/carts">Krepšelis</Link>

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
                    authorization: `Bearer ${authContext.token}`,
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

export default Products;
