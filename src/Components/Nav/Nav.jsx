import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Nav.styles";
import img from "./ZaVuskanu.png"

const Nav = ({ links }) => {
  return (
    <S.NavStyle>
      <S.Img src={img} alt="ZaVuskanu" />
      <div>
        {links &&
          links.map((link) => (
            <Link to={link.to} key={link.title} style={{ marginLeft: "1rem" }}>
              {link.title}
            </Link>
          ))}
      </div>
    </S.NavStyle>
  );
};

export default Nav;
