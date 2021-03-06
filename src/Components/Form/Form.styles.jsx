import styled from "styled-components";

export const Div = styled.div`
  padding: 4rem;
  padding-top: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  width: 30%;
  margin: 0 auto;
  margin-bottom: 2rem;

  @media screen and (max-width: 640px) {
    padding: 2rem;
    width: 60%;
  }
`;

export const Title = styled.h1`
  font-size: 1.3rem;

  @media screen and (max-width: 640px) {
    font-size: 1rem;
  }
`;

export const Input = styled.input`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  width: 100%;
  box-sizing: border-box;
`;
