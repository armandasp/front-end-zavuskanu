import styled from "styled-components";

export const SectionStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;

  @media screen and (max-width: 640px) {
    height: 20vh;
  }
`;
