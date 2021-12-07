import React from "react";
import * as S from "./Button.styles";

const Button = ({ colorBtn, type, children, handleClick, id }) => {
  let background;
  let border;
  let color;
  let padding;

  switch (colorBtn) {
    case "primary":
      background = "#4d4d4d";
      break;
    case "secondary":
      background = "#0285b1";
      break;
    case "logout":
      background = "none";
      border = "none";
      color = "#000";
      padding = "0";
      break;
    default:
      background = "grey";
  }
  return (
    <S.Button
      id={Number(id)}
      style={{ background: background, border: border, color: color, padding: padding }}
      type={type || "button"}
      onClick={handleClick}
    >
      {children}
    </S.Button>
  );
};

export default Button;
