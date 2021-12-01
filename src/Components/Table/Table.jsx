import React, { useState } from "react";
import { Button } from "../../Components";
import * as S from "./Table.styles";

const Table = ({ rows, name, color, handleClick }) => {
  const [quantity, setQuantity] = useState();
  const prices = [];
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
          rows.map(
            (row) => (
              <tr>
                <S.td>{row.title}</S.td>
                <S.td id={row.price}>{row.price}</S.td>
                <S.td>
                  {
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      required
                      onChange={(e) =>
                        setQuantity({
                          ...quantity,
                          number: e.target.value,
                        })
                      }
                    />
                  }
                </S.td>
                <S.td id={row.id}>
                  {document.getElementById(row.price) != null &&
                    //   console.log(
                    //   Number(quantity.number),
                    //   Number(document.getElementById(row.price).innerHTML)
                    // ),
                    (
                      Number(quantity.number) *
                      Number(document.getElementById(row.price).innerHTML)
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
            )
            // document.getElementById(row.price) != null &&
            //   prices.push(Number(document.getElementById(row.id).innerHTML))
          )}
        <tr>
          <S.td colSpan="5" style={{ textAlign: "right" }}>
            Iš viso: {prices.reduce((a, b) => a + b, 0)}
          </S.td>
        </tr>
      </tbody>
    </S.Table>
  );
};

export default Table;

// prices.push(Number(document.getElementById(row.id).innerHTML)
