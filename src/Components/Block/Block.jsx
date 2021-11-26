import React from "react";
import * as S from "./Block.styles";

const Block = ({ blocks }) => {
  return (
    <>
      {blocks &&
        blocks.map((block) => (
          <S.Block key={block.title}>
            <img src={block.image} alt="" />
            <h1>{block.title}</h1>
            <p>€ {block.price}</p>
          </S.Block>
        ))}
    </>
  );
};

export default Block;
