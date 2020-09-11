import React from "react";
import styled from "styled-components";

import HeroImage from "components/molecules/HeroImage";
import { Header } from "components/atoms/Header";
import { Paragraph } from "components/atoms/Paragraph";
import { PagesWrapper } from "components/atoms/PagesWrapper";

import smallImage from "assets/images/hero-hobbies-small.jpg";
import mediumImage from "assets/images/hero-hobbies-medium.jpg";
import bigImage from "assets/images/hero-hobbies-big.jpg";
import veryBigImage from "assets/images/hero-hobbies-very-big.jpg";
import PagesAnimations from "components/molecules/PagesAnimations";

import hobbies1 from "assets/images/hobbies1.jpg";
import hobbies2 from "assets/images/hobbies2.jpg";
import { Span } from "components/atoms/Span";

const StyledFirstParagraph = styled(Paragraph)`
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.semiBold};
  margin-bottom: 40px;
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 100px;
  }
`;

const HobbiesPage = () => {
  return (
    <>
      <PagesAnimations firstSideImage={hobbies1} secondSideImage={hobbies2} />
      <HeroImage
        veryBigImage={veryBigImage}
        bigImage={bigImage}
        mediumImage={mediumImage}
        smallImage={smallImage}
      />
      <PagesWrapper>
        <Header title>Hobbies</Header>
        <StyledFirstParagraph>
          In my life there were many passions and hobbies that have shaped my
          character.
        </StyledFirstParagraph>
        <StyledParagraph>
          However, a lot has changed over the years. The passion that has been
          with me the longest is <Span> football</Span>. I used to play myself,
          today I only watch games - I'm a huge fan of <Span> Juventus </Span>
          and its history, including its fall in 2006 and its rebirth.
        </StyledParagraph>
        <StyledParagraph>
          <Span>Automotive</Span> has always been my hobby. I am mainly
          interested in cars. The development of their technology over the years
          is very interesting.
        </StyledParagraph>
        <StyledParagraph>
          I am also constantly expanding my knowledge of
          <Span> new technologies</Span>. In a programmer's job, it's important
          to stay informed, and I try to <Span> keep pace</Span>. It is
          fascinating to me how much
          <Span> we can achieve with technology</Span> and how much useful it
          can bring to our lives. I also like to spend my time reading books. I
          enjoy reading literature mostly in the fantasy category.
        </StyledParagraph>
      </PagesWrapper>
    </>
  );
};

export default HobbiesPage;
