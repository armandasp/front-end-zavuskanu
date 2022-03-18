import React from "react";
import * as S from "./Contacts.styles";
import { Footer, Button } from "../../Components";

const Contacts = ({ color, handleClick }) => {
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
        <S.rightBlock className="right">
          <h4>Palikite savo atsiliepimą čia:</h4>
          <textarea name="comment" id="" cols="40" rows="3"></textarea>
          <Button color={color} handleClick={handleClick}>
            Siųsti
          </Button>
        </S.rightBlock>
      </S.Contacts>
      <Footer />
    </div>
  );
};

export default Contacts;
