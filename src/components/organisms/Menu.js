import React, { useRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import gsap from "gsap";
import NavLinks from "components/atoms/NavLinks";

const Wrapper = styled.div`
  position: fixed;
  right: -40px;
  top: -40px;
  width: 140px;
  height: 140px;
  background-color: #ed0065;
  border-radius: 50%;
  cursor: pointer;
  z-index: 990;
`;

const InnerWrapper = styled.div`
  position: fixed;
  top: 25px;
  right: 20px;
  width: 50px;
  height: 40px;
  padding: 10px;
  border: 3px solid #000;
  z-index: 999;
  transition: transform 0.6s linear, border-color 0.6s linear;
  cursor: pointer;
  z-index: 999;

  @media (min-width: 1024px) {
    width: 60px;
    height: 50px;
    border: 4px solid #000;
    top: 20px;
    right: 15px;

    ${({ isMenuOpen }) =>
      isMenuOpen &&
      css`
        border-color: #fff;
      `}
  }

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      border-color: #fff;
    `}
`;

const Hamburger = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35px;
  height: 4px;
  background-color: #000;
  z-index: 999;
  transition: background-color 0.6s linear;

  @media (min-width: 1024px) {
    width: 45px;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 8px;
    width: 35px;
    height: 4px;
    background-color: #000;
    transition: transform 0.6s linear;

    @media (min-width: 1024px) {
      width: 45px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    width: 35px;
    height: 4px;
    background-color: #000;
    transition: transform 0.6s linear;

    @media (min-width: 1024px) {
      width: 45px;
    }
  }

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      background-color: transparent;
      &::before {
        content: "";
        transform: translateY(8px) rotate(45deg);
        background-color: #fff;
      }
      &::after {
        content: "";
        transform: translateY(-8px) rotate(-45deg);
        background-color: #fff;
      }
    `}
`;

const MobileModal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 900;

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      display: block;
    `}
`;

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuAnimation = useRef();
  const iconAnimation = useRef();

  const handleClickAnimation = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuAnimation.current, {
        height: "100%",
        width: 250,
        borderRadius: 0,
        top: 0,
        right: 0,
        duration: 1
      });

      gsap.to(iconAnimation.current, { x: "-=250", duration: 0.3 });
    }

    if (!isMenuOpen) {
      gsap.to(menuAnimation.current, {
        height: 140,
        width: 140,
        borderRadius: "50%",
        top: -40,
        right: -40,
        duration: 1.2
      });

      gsap.to(iconAnimation.current, {
        x: 0,
        autoAlpha: 1,
        duration: 0.4,
        ease: "Power2.easeIn"
      });
    }
  }, [menuAnimation, iconAnimation, isMenuOpen]);

  return (
    <>
      <MobileModal onClick={handleClickAnimation} isMenuOpen={isMenuOpen} />

      <InnerWrapper
        isMenuOpen={isMenuOpen}
        onClick={handleClickAnimation}
        ref={iconAnimation}
      >
        <Hamburger isMenuOpen={isMenuOpen} />
      </InnerWrapper>

      <Wrapper ref={menuAnimation}>
        <NavLinks
          menuAnimation={menuAnimation}
          iconAnimation={iconAnimation}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </Wrapper>
    </>
  );
};

export default Menu;
