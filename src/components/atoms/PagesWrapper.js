import styled from "styled-components";

export const PagesWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  @media (min-width: 660px) {
    width: 90%;
  }

  @media (min-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1440px) {
    width: 70%;
  }
`;
