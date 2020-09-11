import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 25px;
  background-color: ${({ theme }) => theme.primaryDark};
`;

const StyledLink = styled.a`
  margin: 0 auto;
  text-decoration: none;
  color: #000;
  line-height: 25px;
`;

const StyledSpan = styled.span`
  font-style: italic;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.semiBold};
`;

const Footer = () => {
  return (
    <Wrapper>
      <StyledLink
        href="https://github.com/RaaaZo"
        rel="noopener noreferrer"
        target="_blank"
      >
        copyrights by <StyledSpan>Mateusz Koprowicz</StyledSpan>
      </StyledLink>
    </Wrapper>
  );
};

export default Footer;
