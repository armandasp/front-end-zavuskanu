import styled from "styled-components";

export const note = styled.div`
  border-radius: 0.2rem;
  color: #fff;
  font-size: 1rem;
  padding: 1rem;
  min-width: 20%;
  position: fixed;
  opacity: 1;
  top: 4rem;
  right: 2rem;
  transition: 0.5s;
`;

export const deleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 1.3rem;
  position: absolute;
  right: 0.5rem;
  top: 0.75rem;
  margin: 0;
  padding: 0;
  width: 1rem;
  height: 1rem;
`;
