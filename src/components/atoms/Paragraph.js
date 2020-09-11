import styled, { css } from "styled-components";

export const Paragraph = styled.p`
  max-width: 1280px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  text-align: justify;
  text-align-last: center;
  margin: 30px;
  margin-bottom: 80px;

  @media (min-width: 660px) {
    margin: 30px auto;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    margin: 50px auto;
  }

  @media (min-width: 1440px) {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.m};
    width: 70%;
    margin-bottom: 120px;
  }

  @media (min-width: 2100px) {
    font-size: 3rem;
  }

  ${({ semiBold }) =>
    semiBold &&
    css`
      font-weight: ${({ theme: { fontWeights } }) => fontWeights.semiBold};
    `}
`;
