import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Nav.styles";

const Nav = ({ links }) => {
  return (
    <S.NavStyle>
      <S.Img
        src="https://www.google.lt/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="google"
      />
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
