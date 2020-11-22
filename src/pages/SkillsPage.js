import React, { useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroImage from "components/molecules/HeroImage";
import { Header } from "components/atoms/Header";
import { Button } from "components/atoms/Button";
import { Paragraph } from "components/atoms/Paragraph";
import { ReactComponent as ArrowSvg } from "assets/svg/arrow.svg";

import smallImage from "assets/images/hero-skills-small.jpg";
import mediumImage from "assets/images/hero-skills-medium.jpg";
import bigImage from "assets/images/hero-skills-big.jpg";
import veryBigImage from "assets/images/hero-skills-very-big.jpg";
import {
  actuallyLearningData,
  ButtonsData,
  othersKnown,
  wantToLearnData
} from "data";

gsap.registerPlugin(ScrollTrigger);

const StyledHeader = styled(Header)`
  margin: 20px auto;
  text-align: center;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 40px auto 120px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 80%;
    flex-flow: row wrap;
  }

  @media (min-width: 1440px) {
    width: 60%;
  }
`;

const StyledButton = styled(Button)`
  width: 51%;
  margin: 5px 0;

  @media (min-width: 1024px) {
    width: 40%;
    margin: 15px 30px;
  }

  @media (min-width: 1440px) {
    width: 30%;
    margin: 15px 10px;
  }

  ${({ actuallyLearning }) =>
    actuallyLearning &&
    css`
      color: ${({ theme }) => theme.secondaryLight};
      border-color: ${({ theme }) => theme.secondaryLight};
    `}

    ${({ wantToLearn }) =>
      wantToLearn &&
      css`
        color: #005246;
        border-color: #005246;
      `}

    ${({ otherKnown }) =>
      otherKnown &&
      css`
        color: ${({ theme }) => theme.primaryDark};
        border-color: ${({ theme }) => theme.primaryDark};
      `}

  ${({ inverse }) =>
    inverse &&
    css`
      align-self: flex-end;
    `}
`;

const SvgWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledArrowSvg = styled(ArrowSvg)`
  width: 60px;
  height: 60px;
  margin-bottom: 40px;
  cursor: pointer;
`;

const StyledParagraph = styled(Paragraph)`
  @media (min-width: 660px) {
    width: 90%;
  }

  @media (min-width: 1024px) {
    width: 80%;
  }
`;

const SkillsPage = () => {
  const buttonsWrapperRef = useRef([]);
  buttonsWrapperRef.current = [];

  const arrowRef = useRef();

  const scrollToButtons = () => {
    window.scrollTo({
      top: buttonsWrapperRef.current[0].offsetTop - 200,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    gsap.set(arrowRef.current, { y: "-=20", ease: "none" });

    gsap.fromTo(
      arrowRef.current,
      { y: "-=20" },
      { duration: 1, y: "+=20", yoyo: true, repeat: -1 }
    );
  }, []);

  useEffect(() => {
    buttonsWrapperRef.current.forEach(el => {
      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        {
          duration: 1.5,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `button`,
            trigger: el,
            start: "top center+=285",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  const addToRefs = el => {
    if (el && !buttonsWrapperRef.current.includes(el)) {
      buttonsWrapperRef.current.push(el);
    }
  };

  return (
    <>
      <HeroImage
        veryBigImage={veryBigImage}
        bigImage={bigImage}
        mediumImage={mediumImage}
        smallImage={smallImage}
      />

      <StyledHeader title>Skills</StyledHeader>

      <StyledParagraph semiBold="true">
        In each new project, I try to apply new concepts so that I can develop
        my skills from project to project. Most of my projects are based on
        React. This is because I feel best in it. And I liked his concept the
        most of the other frameworks. All my knowledge comes from self-study as
        well as online courses.
      </StyledParagraph>

      <SvgWrapper>
        <StyledArrowSvg ref={arrowRef} onClick={scrollToButtons} />
      </SvgWrapper>

      <StyledHeader ref={addToRefs}>Currently known:</StyledHeader>
      <ButtonsWrapper>
        {ButtonsData.map(({ inverse, id, text }) => (
          <StyledButton ref={addToRefs} inverse={inverse} key={id}>
            {text}
          </StyledButton>
        ))}
      </ButtonsWrapper>

      <StyledHeader ref={addToRefs}>Other known:</StyledHeader>
      <ButtonsWrapper>
        {othersKnown.map(({ inverse, id, text }) => (
          <StyledButton
            otherKnown="true"
            ref={addToRefs}
            inverse={inverse}
            key={id}
          >
            {text}
          </StyledButton>
        ))}
      </ButtonsWrapper>

      <StyledHeader ref={addToRefs}>Actually learning:</StyledHeader>
      <ButtonsWrapper>
        {actuallyLearningData.map(({ inverse, id, text }) => (
          <StyledButton
            actuallyLearning="true"
            ref={addToRefs}
            inverse={inverse}
            key={id}
          >
            {text}
          </StyledButton>
        ))}
      </ButtonsWrapper>

      <StyledHeader ref={addToRefs}>Want to learn in the future:</StyledHeader>
      <ButtonsWrapper>
        {wantToLearnData.map(({ inverse, id, text }) => (
          <StyledButton
            wantToLearn="true"
            ref={addToRefs}
            inverse={inverse}
            key={id}
          >
            {text}
          </StyledButton>
        ))}
      </ButtonsWrapper>
    </>
  );
};

export default SkillsPage;
