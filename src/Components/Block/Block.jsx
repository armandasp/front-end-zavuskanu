import React from "react";
import * as S from "./Block.styles";
import { Button } from "../../Components";

const Block = ({ blocks, name, handleClick, children }) => {
  return (
    <>
      {blocks &&
        blocks.map((block) => (
          <S.Block key={block.id}>
            <img src={block.image} alt="" />
            <h1>{block.title}</h1>
            <p>€ {block.price}</p>
            <Button id={block.id} handleClick={handleClick}>
              {name}
            </Button>
            {children}
          </S.Block>
        ))}
    </>
  );
};

export default Block;
