import React from "react";
import * as S from "./Block.styles";
import { Button } from "../../Components";

const Block = ({ blocks, name, handleClick, children, color }) => {
  return (
    <>
      {blocks &&
        blocks.map((block) => (
          <S.Block key={block.id}>
            <S.imgStyle src={block.image} alt="" />
            <S.Title>{block.title}</S.Title>
            <p>€ {block.price}</p>
            <Button color={color} id={block.id} handleClick={handleClick}>
              {name}
            </Button>
            {children}
          </S.Block>
        ))}
    </>
  );
};

export default Block;
