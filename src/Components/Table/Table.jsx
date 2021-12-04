import React from "react";
import { Button } from "../../Components";
import * as S from "./Table.styles";

const Table = ({ rows, name, color, handleClick }) => {
  return (
    <S.Table>
      <thead>
        <tr>
          <S.thLeft>Prekė</S.thLeft>
          <S.thCenter>Kaina</S.thCenter>
          {/* <S.th>Kiekis</S.th>
          <S.th>Suma</S.th> */}
          <S.th>Pašalinti prekę</S.th>
        </tr>
      </thead>
      <tbody>
        {rows &&
          rows.map(
            (row) => (
              <tr>
                <S.tdLeft>{row.title}</S.tdLeft>
                <S.tdCenter id={row.id}>€ {row.price}</S.tdCenter>
                {/* <S.td>
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
                  {document.getElementById(row.price) != null && Number(quantity.number) != null &&
                    //   console.log(
                    //   Number(quantity.number),
                    //   Number(document.getElementById(row.price).innerHTML)
                    // ),
                    (
                      Number(quantity.number) *
                      Number(document.getElementById(row.price).innerHTML)
                    ).toFixed(2)}
                </S.td> */}
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
      </tbody>
    </S.Table>
  );
};

export default Table;

// prices.push(Number(document.getElementById(row.id).innerHTML)
