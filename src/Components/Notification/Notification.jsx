import React from "react";
import * as S from "./Notification.styles";

const Notification = ({ color, children }) => {
  let background, display;

  switch (color) {
    case "success":
      background = "lightgreen";
      display = "inline-block";
      break;
    case "error":
      background = "red";
      break;
    default:
      background = "grey";
  }
  return (
    <S.note id="note" style={{ background, display }}>
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
