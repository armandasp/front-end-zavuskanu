import React, { useState, useEffect } from "react";
import { Nav, Block } from "../../Components";
import * as S from "./Sets.styles";
import { Link } from "react-router-dom";

const links = [
  { title: "Pradžia", to: "/" },
  { title: "Apie mus", to: "/add" },
  { title: "Prisijungti", to: "/login" },
  { title: "Registruotis", to: "/register" },
];

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
      <Nav links={links} />
      <h1>Rinkiniai</h1>

      <Link to="/">Produktai</Link>
      <Link to="/sets">Rinkiniai</Link>
      <Link to="/carts">Krepšelis</Link>

      {!items && <h1>Loading...</h1>}

      {items && items.length === 0 && <h1>Nėra produktų</h1>}

      {items && (
        <S.SectionStyle className="blocks">
          <Block blocks={items} name="Į krepšelį"/>
        </S.SectionStyle>
      )}
    </div>
  );
};

export default Sets;
