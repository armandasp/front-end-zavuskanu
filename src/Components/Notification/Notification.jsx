import React from "react";
import * as S from "./Notification.styles";

const Notification = ({ color, children }) => {
  let background;
  switch (color) {
    case "success":
      background = "green";
      break;
    case "error":
      background = "red";
      break;
    default:
      background = "grey";
  }
  return (
    <S.note style={{ background }}>
      <S.deleteButton>x</S.deleteButton>
      {children}
    </S.note>
  );
};

export default Notification;
