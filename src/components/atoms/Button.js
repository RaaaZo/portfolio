import styled, { css } from "styled-components";

export const Button = styled.button`
  width: 145px;
  height: 50px;
  font-family: ${({ theme: { fontFamilies } }) => fontFamilies.teko};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.s};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  color: ${({ theme }) => theme.accents};
  background-color: #fff;
  border: 2px solid ${({ theme }) => theme.accents};
  border-radius: 10px;
  text-align: center;

  @media (min-width: 768px) {
    width: 320px;
    height: 60px;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.m};
  }

  @media (min-width: 1440px) {
    width: 380px;
    height: 70px;
    font-size: 3rem;
  }

  ${({ contactButton }) =>
    contactButton &&
    css`
      position: relative;
      width: 240px;
      height: 60px;
      border-radius: 25px;
      color: #000;
      background-color: ${({ theme }) => theme.primaryLight};
      border-color: ${({ theme }) => theme.primaryLight};
      cursor: pointer;

      @media (min-width: 768px) {
        width: 300px;
        height: 80px;
      }

      @media (min-width: 1024px) {
        width: 350px;
        height: 80px;
      }

      @media (min-width: 1320px) {
        width: 400px;
        height: 100px;
        font-size: 3rem;
      }
    `}
`;
