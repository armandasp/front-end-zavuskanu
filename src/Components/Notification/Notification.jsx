import React from "react";
import * as S from "./Notification.styles";

const Notification = ({ color, children }) => {
  let background, opacity;

  switch (color) {
    case "success":
      background = "lightgreen";
      opacity = "1";
      break;
    case "error":
      background = "red";
      opacity = "1";
      break;
    default:
      background = "grey";
      opacity = "1";
  }
  return (
    <S.note id="note" style={{ background, opacity }}>
      <S.deleteButton
        onClick={() => {
          document.getElementById("note").style.opacity = "0";
        }}
      >
        x
      </S.deleteButton>
      {children}
    </S.note>
  );
};

export default Notification;
