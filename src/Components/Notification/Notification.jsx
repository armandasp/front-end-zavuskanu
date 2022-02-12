import React from "react";
import * as S from "./Notification.styles";

const Notification = ({ color, children }) => {
  let background;

  switch (color) {
    case "success":
      background = "lightgreen";
      break;
    case "error":
      background = "red";
      break;
    default:
      background = "grey";
  }
  return (
    <S.note id="note" style={{ background }}>
      <S.deleteButton
        onClick={() => {
          document.getElementById("note").style.display = "none";
        }}
      >
        x
      </S.deleteButton>
      {children}
    </S.note>
  );
};

export default Notification;
