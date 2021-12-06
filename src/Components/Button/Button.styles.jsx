import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: #fff;

  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.7rem;
  }
`;

