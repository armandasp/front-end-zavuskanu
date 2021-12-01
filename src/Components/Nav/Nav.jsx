import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Nav.styles";
import img from "./ZaVuskanu.png";
import { Button } from "../../Components";



const Nav = ({ links }) => {
  return (
    <S.NavStyle className="links">
      <S.Img src={img} alt="ZaVuskanu" />
      <div>
        {links &&
          links.map((link) => (
            <Link to={link.to} key={link.title} style={{ marginLeft: "1rem" }}>
              {link.title}
            </Link>
          ))}
      </div>
      <div className="buttons">
        <Link to="/login">
          <Button color="primary">Prisijungti</Button>
        </Link>
      </div>
    </S.NavStyle>
  );
};

export default Nav;
