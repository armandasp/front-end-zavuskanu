import styled from "styled-components";

export const Table = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
  width: 80%;
`;

export const th = styled.th`
  text-align: right;
  padding-bottom: 1rem;
  padding: 1rem 1rem 1rem 0;
`;

export const thLeft = styled.th`
  text-align: left;
  padding-bottom: 1rem;
  width: 50%;
`;

export const thCenter = styled.th`
  text-align: center;
  padding-bottom: 1rem;
`;

export const td = styled.td`
  text-align: right;
  border-top: 1px solid #858181;
  padding: 1rem 1rem 1rem 0;
`;

export const tdCenter = styled.td`
  border-top: 1px solid #858181;
  text-align: center;
  font-weight: regular;
`;

export const tdLeft = styled.td`
  text-align: left;
  border-top: 1px solid #858181;
  padding: 1rem 1rem 1rem 0;
`;

export const tdTotal = styled.td`
  border-top: 1px solid #858181;
  padding: 1rem 1rem 1rem 0;
  font-size: 1.3rem;
  font-weight: bold;
`;