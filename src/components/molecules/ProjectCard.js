import React from "react";
import { Header } from "components/atoms/Header";
import styled, { keyframes } from "styled-components";
import { Paragraph } from "components/atoms/Paragraph";

const shakingAnimation = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const Wrapper = styled.div`
  width: 90%;
  height: 550px;
  padding: 20px;
  margin: 20px auto;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fef0ca;
  border: 2px solid ${({ theme }) => theme.accents};
  border-radius: 15px;

  @media (min-width: 768px) {
    height: 650px;
  }

  @media (min-width: 1140px) {
    width: 46%;
    height: 750px;
    margin: 30px 20px 90px 20px;
  }
`;

const AnchorsWrapper = styled.div`
  width: 100%;
  height: 20px;
  padding: 10px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    width: 100%;
  }
`;

const StyledHeader = styled(Header)`
  width: 90%;
  margin: 20px auto;
  text-align: center;
`;

const StyledParagraph = styled(Paragraph)`
  width: 90%;
  margin: 0 auto 20px auto;

  @media (min-width: 1440px) {
    font-size: 2rem;
  }
`;

const StyledAnchor = styled.a`
  width: 40%;
  height: 40px;
  line-height: 40px;
  font-size: 2rem;
  font-family: ${({ theme: { fontFamilies } }) => fontFamilies.teko};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.s};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  background-color: #fef0ca;
  color: ${({ theme }) => theme.accents};
  text-align: center;
  border: 2px solid ${({ theme }) => theme.accents};
  border-radius: 15px;
  text-decoration: none;
  cursor: pointer;
  transition: 600ms 50ms ease-in-out;

  &:hover {
    animation: 1s ${shakingAnimation} ease-out;
  }

  @media (min-width: 768px) {
    width: 35%;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.m};
    height: 50px;
    line-height: 50px;
  }

  @media (min-width: 1440px) {
    width: 40%;
    font-size: 3rem;
  }
`;

const ProjectCard = ({ title, descTop, descBottom, live, code }) => {
  return (
    <>
      <Wrapper>
        <StyledHeader>{title}</StyledHeader>
        <StyledParagraph>{descTop}</StyledParagraph>
        <StyledParagraph>{descBottom}</StyledParagraph>
        <AnchorsWrapper>
          <StyledAnchor href={live} rel="noopener noreferrer" target="_blank">
            Live
          </StyledAnchor>

          <StyledAnchor href={code} rel="noopener noreferrer" target="_blank">
            Code
          </StyledAnchor>
        </AnchorsWrapper>
      </Wrapper>
    </>
  );
};

export default ProjectCard;
