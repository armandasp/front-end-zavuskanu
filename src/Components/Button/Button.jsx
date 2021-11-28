import React from "react";
import * as S from "./Button.styles";

const Button = ({ color, type, children, handleClick, id }) => {
  let background;

  switch (color) {
    case "primary":
      background = "#262677";
      break;
    case "secondary":
      background = "#0285b1";
      break;
    default:
      background = "grey";
  }
  return (
    <S.Button
      id={Number(id)}
      style={{ background: background }}
      type={type || "button"}
      onClick={handleClick}
    >
      {children}
    </S.Button>
  );
};

export default Button;
