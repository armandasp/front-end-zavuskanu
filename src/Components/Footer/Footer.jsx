import React from 'react'
import * as S from "./Footer.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../fontawesome";

const Footer = () => {
    return (
        <S.Footer>
            <S.Contacts className="contacts">
                <S.h2>Susisiekite</S.h2>
                <div className="icons">
                    <S.Icon href="https://www.facebook.com/zavuskanu-105714631954149">
                    <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </S.Icon>
                    <S.Icon href="https://www.instagram.com/zavuskanu/">
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </S.Icon>
                </div>
            </S.Contacts>
            <p>Copyright 2021 - All right reserved.</p>
        </S.Footer>
    )
}

export default Footer
