import styled from "styled-components";

export const SectionStyle = styled.section`
  width: 85%;
  margin: 0 auto;
`;

export const pStyle = styled.p`
  text-align: right;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const DivStyle = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1008px) {
    flex-direction: column;
  }
`;

export const leftSection = styled.section`
  flex: 3;

  @media screen and (max-width: 640px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const rightSection = styled.section`
  flex: 2.5;

  @media screen and (max-width: 640px) {
    width: 90%;
    margin: 0 auto;
  }
`;