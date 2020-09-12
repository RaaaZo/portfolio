import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  max-height: 200px;
  object-fit: cover;
  object-position: center;

  @media (min-width: 768px) {
    max-height: 350px;
  }

  @media (min-width: 1440px) {
    max-height: 500px;
  }
`;
