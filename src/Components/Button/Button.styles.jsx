import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: #fff;
  :hover {
    background: #fff;
    color: #4d4d4d;
    /* transition: 0.2s; */
    border: 0.1rem solid #4d4d4d;
    padding: 0.4rem 0.9rem;
  }

  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.7rem;
  }
`;

