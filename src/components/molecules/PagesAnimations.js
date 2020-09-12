import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import gsap from "gsap";

const Wrapper = styled.div`
  position: relative;
  width: 90%;
  height: 350px;
  margin: 20px auto 80px auto;

  @media (min-width: 650px) {
    height: 400px;
  }

  @media (min-width: 1024px) {
    height: 450px;
  }

  @media (min-width: 1440px) {
    position: static;
    height: 0;
  }
`;

const StyledImg = styled.img`
  width: 200px;
  height: 300px;
  position: absolute;
  top: 45%;
  right: 2%;
  border-radius: 25px;
  transform: rotate(8deg) translateY(-50%);
  object-fit: cover;
  object-position: center right;

  @media (min-width: 650px) {
    width: 240px;
    height: 350px;
    right: 20%;
  }

  @media (min-width: 1024px) {
    width: 300px;
    height: 400px;
    right: 25%;
  }

  @media (min-width: 1440px) {
    top: 105%;
    right: 3%;
  }

  @media (min-width: 2100px) {
    right: 5%;
    width: 400px;
    height: 500px;
  }

  ${({ second }) =>
    second &&
    css`
      width: 220px;
      height: 300px;
      top: 55%;
      left: 3%;
      transform: rotate(-12deg) translateY(-50%);
      object-position: center;

      @media (min-width: 650px) {
        width: 260px;
        height: 350px;
        left: 20%;
      }

      @media (min-width: 1024px) {
        width: 320px;
        height: 400px;
        left: 25%;
      }

      @media (min-width: 1440px) {
        width: 250px;
        height: 400px;
        top: 90%;
        left: 5%;
      }

      @media (min-width: 1600px) {
        top: 85%;
        width: 300px;
        height: 450px;
      }

      @media (min-width: 2100px) {
        left: 8%;
        width: 450px;
        height: 550px;
      }
    `}
`;

const PagesAnimations = ({ firstSideImage, secondSideImage }) => {
  const imagesFirstRef = useRef();
  const imagesSecondRef = useRef();

  useEffect(() => {
    const imagesRef = [imagesFirstRef.current, imagesSecondRef.current];

    gsap.set(imagesRef, { opacity: 0, ease: "linear" });

    gsap.fromTo(
      imagesRef,
      { opacity: 0 },
      { opacity: 1, duration: 5, stagger: 1, delay: 1 }
    );
  });

  return (
    <Wrapper>
      <StyledImg
        ref={imagesFirstRef}
        src={firstSideImage}
        alt="right side image"
      />
      <StyledImg
        ref={imagesSecondRef}
        second="true"
        src={secondSideImage}
        alt="left side image"
      />
    </Wrapper>
  );
};

export default PagesAnimations;
