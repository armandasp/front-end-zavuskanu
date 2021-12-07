import styled from "styled-components";

export const Block = styled.div`
  text-align: center;
  box-sizing: border-box;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: calc(33% - 0.5rem);
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  padding: 1rem;
  &:nth-child(3n) {
    margin-right: 0;
  }

  @media (max-width: 640px) {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 1rem;

    &:nth-child(3n) {
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 641px) and (max-width: 1008px) {
    width: calc(50% - 1rem);
    &:nth-child(3n) {
      margin-right: 1rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  max-width: 90%;
  margin: 0 auto;
  margin-top: 0.5rem;


`;

export const imgStyle = styled.img`
  width: 8rem;
  height: 10rem;
  object-fit: cover;

  @media (max-width: 640px) {
    width: 6rem;
    height: 7rem;
  }
`;
