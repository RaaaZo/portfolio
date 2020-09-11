import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import gsap from "gsap";

const StyledImg = styled.img`
  display: none;
  width: 300px;
  height: 400px;
  position: absolute;
  top: 65%;
  right: 1%;
  border-radius: 25px;
  transform: rotate(8deg);
  object-fit: cover;
  object-position: center right;

  @media (min-width: 1440px) and (min-height: 800px) {
    display: block;
  }

  @media (min-width: 2100px) {
    right: 3%;
    width: 400px;
    height: 500px;
  }

  ${({ second }) =>
    second &&
    css`
      width: 250px;
      height: 400px;
      top: 85%;
      left: 3%;
      transform: rotate(-12deg);
      object-position: center;

      @media (min-width: 1600px) {
        top: 80%;
        width: 350px;
        height: 450px;
      }

      @media (min-width: 2100px) {
        left: 3%;
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
    <>
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
    </>
  );
};

export default PagesAnimations;
