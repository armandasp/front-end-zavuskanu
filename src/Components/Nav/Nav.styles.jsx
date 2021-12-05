import styled from "styled-components";

export const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Img = styled.img`
  height: 6rem;
  cursor: pointer;
`;

export const rightDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

export const nameStyle = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0;
  margin-top: 0;
`;

export const logOffButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  :hover {
    text-decoration: underline;
  }
`;

export const link = styled.p`
    color: #000;
    text-decoration: none;
    :hover {
      color: grey;
      transition: 0.2s;
    }
`;

export const navLinks = styled.div`
    display: flex;
    justify-content: space-around;
`;

// export const LinkStyle = styled(Link)`
//   text-decoration: none;
//   margin-left: 1rem;
// `;
