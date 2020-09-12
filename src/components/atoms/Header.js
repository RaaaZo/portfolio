import styled, { css } from "styled-components";

export const Header = styled.h3`
  width: 90%;
  max-width: 1280px;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.m};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.semiBold};
  text-align: justify;
  text-align-last: center;
  margin: 30px auto;

  @media (min-width: 660px) {
    margin: 30px auto;
  }

  @media (min-width: 768px) {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.l};
  }

  @media (min-width: 1024px) {
    margin: 50px auto;
  }

  @media (min-width: 1440px) {
    width: 70%;
  }

  @media (min-width: 2100px) {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  }

  ${({ title }) =>
    title &&
    css`
      font-family: ${({ theme: { fontFamilies } }) => fontFamilies.teko};
      font-size: ${({ theme: { fontSizes } }) => fontSizes.l};
      font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
      color: ${({ theme }) => theme.accents};
      text-align: center;

      @media (min-width: 768px) {
        font-size: ${({ theme: { fontSizes } }) => fontSizes.xxl};
      }

      @media (min-width: 1920px) {
        font-size: 5.6rem;
      }
    `}
`;
