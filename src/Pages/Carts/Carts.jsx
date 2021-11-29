import React, { useState, useEffect, useContext } from "react";
import { Nav, Block, Footer } from "../../Components";
import { Link } from "react-router-dom";
import * as S from "./Carts.styles";
import { AuthContext } from "../../Contexts/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../fontawesome";

const links = [
  { title: "Pradžia", to: "/" },
  { title: "Apie mus", to: "/add" },
  { title: "Prisijungti", to: "/login" },
  { title: "Registruotis", to: "/register" },
];

const Carts = () => {
  const authContext = useContext(AuthContext);
  const [items, setItems] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/v1/carts", {
      headers: {
        authorization: `Bearer ${authContext.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.err) {
          return alert(data.err);
        }
        setItems(data);
      })
      .catch((err) => alert(err));
  }, []);
  return (
    <div>
      <Nav links={links} />

      <h1>Krepšelis</h1>

      <Link to="/">Produktai</Link>
      <Link to="/sets">Rinkiniai</Link>
      <Link to="/carts">Krepšelis</Link>

      {!items && <h1>Loading...</h1>}

      {items && items.length === 0 && <h1>Krepšelis tuščias</h1>}

      {items && (
        <S.SectionStyle className="blocks">
          <Block
            blocks={items}
            name={<FontAwesomeIcon icon={["far", "trash-alt"]} />}
            color="secondary"
            handleClick={(e) => {
              e.preventDefault();
              console.log(e.target);
              fetch(
                `http://localhost:3000/v1/carts/delete/${Number(e.target.id)}`,
                {
                  method: "DELETE",
                  headers: {
                    authorization: `Bearer ${authContext.token}`,
                  },
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  alert("Prekė pašalinta")})
                .catch((err) => alert(err));
            }}
          />
        </S.SectionStyle>
      )}
      <Footer />
    </div>
  );
};

export default Carts;
