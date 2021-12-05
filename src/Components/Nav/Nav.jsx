import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Nav.styles";
import img from "./ZaVuskanu.png";
import { Button } from "../../Components";
import jwt_decode from "jwt-decode";

const token = localStorage.getItem("token");

if (token) {
  var decoded = jwt_decode(token);
} else {
  console.log("nėra tokeno");
}

const Nav = ({ links }) => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
    window.location.replace("/login");
  };

  return (
    <>
      <S.NavStyle className="links">
        <Link to="/">
          <S.Img src={img} alt="ZaVuskanu" />
        </Link>
        <div>
          {links &&
            links.map((link) => (
              <Link
                to={link.to}
                key={link.title}
                style={{ marginLeft: "1rem" }}
              >
                {link.title}
              </Link>
            ))}
        </div>
        <div className="buttons">
          {token && (
            <S.rightDiv>
              <S.nameStyle>{decoded.name}</S.nameStyle>
              <Button
                colorBtn="logout"
                handleClick={logout}
              >
                Atsijungti
              </Button>
            </S.rightDiv>
          )}
          {!token && (
            <Link to="/login">
              <Button colorBtn="primary">Prisijungti</Button>
            </Link>
          )}
        </div>
      </S.NavStyle>
    </>
  );
};

export default Nav;
