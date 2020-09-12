import { Button } from "components/atoms/Button";
import React, { Fragment, useState } from "react";
import styled, { css } from "styled-components";

import { Header } from "components/atoms/Header";

import { Paragraph } from "components/atoms/Paragraph";
import { contactData } from "data";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 100%;
  padding: 20px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  &:last-child {
    margin-bottom: 80px;
  }

  @media (min-width: 1024px) {
    flex-flow: row wrap;
  }
`;

const StyledButton = styled(Button)`
  margin: 20px auto;
`;

const StyledImg = styled.img`
  position: absolute;
  top: 50%;
  left: 8%;
  transform: translateY(-50%);
`;

const StyledHeader = styled(Header)`
  width: 50%;
  position: absolute;
  top: 50%;
  right: 15%;
  transform: translateY(-50%);
  font-family: ${({ theme: { fontFamilies } }) => fontFamilies.rubik};
  margin: 0;
`;

const StyledAnchor = styled.a`
  position: relative;
  width: 240px;
  height: 60px;
  border-radius: 25px;
  color: #000;
  margin: 20px auto;

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
`;

const StyledPhoneParagraph = styled(Paragraph)`
  width: 50%;
  position: absolute;
  top: 50%;
  right: 15%;
  transform: translateY(-50%);
  margin: 0;
  color: ${({ theme }) => theme.accents};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.m};

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const ContactButton = () => {
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);

  const handleIsOpen = whatIsOpen => {
    whatIsOpen(prevState => !prevState);
  };

  const handleOpenMail = emailAdress => {
    window.location.href = `mailto:${emailAdress}`;
  };

  return (
    <Wrapper>
      {contactData.map(({ link, data, id, svg, text }) => (
        <Fragment key={id}>
          {data && text === "Phone" && (
            <>
              <StyledButton
                onClick={() => handleIsOpen(setIsPhoneOpen)}
                contactButton="true"
              >
                <StyledImg src={svg} />

                {isPhoneOpen ? (
                  <StyledPhoneParagraph onClick={e => e.stopPropagation()}>
                    {data}
                  </StyledPhoneParagraph>
                ) : (
                  <StyledHeader>{text}</StyledHeader>
                )}
              </StyledButton>
            </>
          )}

          {data && text === "Gmail" && (
            <>
              <StyledButton
                onClick={() => handleOpenMail(data)}
                contactButton="true"
              >
                <StyledImg src={svg} />
                <StyledHeader>{text}</StyledHeader>
              </StyledButton>
            </>
          )}

          {link && (
            <>
              <StyledAnchor
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledImg src={svg} />
                <StyledHeader>{text}</StyledHeader>
              </StyledAnchor>
            </>
          )}
        </Fragment>
      ))}
    </Wrapper>
  );
};

export default ContactButton;
