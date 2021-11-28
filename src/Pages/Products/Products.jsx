import React, { useState, useEffect, useContext } from "react";
import { Nav, Block } from "../../Components";
import * as S from "./Products.styles";
import { Link, useParams } from "react-router-dom";
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

  // console.log(items);

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
              fetch(
                `http://localhost:3000/v1/carts/add/${Number(e.target.id)}`,
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
                  alert(`${e.target.title} pridėtas į krepšelį`);
                });

              // items.forEach((item) => {
              //   console.log(item.id === Number(e.target.id));
              //   if (item.id === Number(e.target.id)) {
              //     fetch(`http://localhost:3000/v1/carts/add/${item.id}`, {
              //       method: "POST",
              //       headers: {
              //         authorization: `Bearer ${authContext.token}`,
              //         "Content-Type": "application/json",
              //       },
              //       body: JSON.stringify(item),
              //     })
              //       .then((res) => res.json())
              //       .then((data) => {
              //         if (!data.msg) {
              //           alert(data.err);
              //         }
              //         alert(`${item.title} pridėtas į krepšelį`);
              //       });
              //   }
              //   alert("something is wrong");
              // });
            }}
            // handleClick={(e) => {
            //   e.preventDefault();
            //   console.log(e.target.id);
            // }}

            //   e.preventDefault();
            // fetch(`http://localhost:3000/v1/carts/add/${id}`, {
            //   method: "POST",
            //   headers: {
            //     authorization: `Bearer ${authContext.token}`,
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify(items),
            // })
            //   .then((res) => res.json())
            //   .then((data) => {
            //     if (!data.msg) {
            //       alert(data.err);
            //       return console.log(data.err);
            //     }
            //     alert(data.msg);
            //   })
            //   .catch((err) => alert(err));
            // }}
          />
        </S.SectionStyle>
      )}
    </div>
  );
};

export default Products;
