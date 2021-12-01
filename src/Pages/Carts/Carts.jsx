import React, { useState, useEffect, useContext } from "react";
import { Nav, Footer, Table } from "../../Components";
import { Link } from "react-router-dom";
import * as S from "./Carts.styles";
import { AuthContext } from "../../Contexts/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../fontawesome";

const links = [
  { title: "Prekės", to: "/" },
  { title: "Rinkiniai", to: "/sets" },
  { title: "Apie mus", to: "/" },
  { title: "Kontaktai", to: "/" },
  { title: "Krepšelis", to: "/carts" },
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
          return alert("Esate neprisijungęs(-usi)");
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
          <Table
            rows={items}
            name={<FontAwesomeIcon icon={["far", "trash-alt"]} />}
            color="secondary"
            handleClick={(e) => {
              e.preventDefault();
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
                  alert("Prekė pašalinta");
                  fetch("http://localhost:3000/v1/carts", {
                    headers: {
                      authorization: `Bearer ${authContext.token}`,
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
        </S.SectionStyle>
      )}
      <Footer />
    </div>
  );
};

export default Carts;
