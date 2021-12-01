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
                    <S.Icon href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </S.Icon>
                    <S.Icon href="https://www.instagram.com/zavuskanu/">
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </S.Icon>
                    <S.Icon href="https://twitter.com/">
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </S.Icon>
                </div>
            </S.Contacts>
            <p>Copyright 2021 - All right reserved.</p>
        </S.Footer>
    )
}

export default Footer
