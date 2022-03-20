import React from "react";
import * as S from "./Contacts.styles";
import { Footer, Button, Notification } from "../../Components";

const token = localStorage.getItem("token");

const Contacts = () => {
  return (
    <div>
      <S.Title>Kontaktai</S.Title>
      <S.Contacts className="contacts">
        <div className="left">
          <h4>
            Dėl išskirtinių ar didelio kiekio užsakymų (įmonėms) kreipkitės:
          </h4>
          <p>zavuskanutest@gmail.com</p>
          <p>+37065669582</p>
        </div>
        <div>
          <form id="commentForm">
            <h4>Palikite atsiliepimą</h4>
            <S.textArea
              name="comment"
              id="comment"
              cols="30"
              rows="4"
            ></S.textArea>
            <Button
              type="submit"
              handleClick={(e) => {
                e.preventDefault();
                const comment = document.getElementById("comment").value;
                fetch(`${process.env.REACT_APP_URL}/v1/comments/add`, {
                  method: "POST",
                  headers: {
                    authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ comment }),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.err) {
                      return alert(data.err);
                    }
                    document.forms.commentForm.reset();
                    return alert("Komentaras išsiųstas");
                  })
                  .catch((err) => alert(err));
              }}
            >
              Siųsti
            </Button>
          </form>
        </div>
      </S.Contacts>
      <Footer />
    </div>
  );
};

export default Contacts;
