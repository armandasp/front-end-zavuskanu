import React from "react";
import { Button } from "../../Components";
import * as S from "./Table.styles"

const Table = ({ rows, name, color, handleClick }) => {
  return (
    <S.Table>
      <thead>
        <tr>
          <S.th>Prekė</S.th>
          <S.th>Kaina</S.th>
          <S.th>Kiekis</S.th>
          <S.th>Suma</S.th>
          <S.th>Pašalinti prekę</S.th>
        </tr>
      </thead>
      <tbody>
        {rows &&
          rows.map((row) => (
            <tr>
              <S.td>{row.title}</S.td>
              <S.td>{row.price}</S.td>
              <S.td id={row.id}>{<input type="number" min="1" required />}</S.td>
              <S.td>
                {document.getElementById(row.id) != null &&
                  (
                    Number(row.price) *
                    Number(document.getElementById(row.id).value)
                  ).toFixed(2)}
              </S.td>
              <S.td>
                {
                  <Button color={color} id={row.id} handleClick={handleClick}>
                    {name}
                  </Button>
                }
              </S.td>
            </tr>
          ))}
      </tbody>
    </S.Table>
  );
};

export default Table;
