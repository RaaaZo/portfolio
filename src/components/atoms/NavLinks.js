import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import gsap from "gsap";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledNavLink = styled.h3`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.s};
  font-family: ${({ theme: { fontFamilies } }) => fontFamilies.teko};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  text-align: center;
  width: 80%;
  padding: 7px 0;
  border: 2px solid #000;
  color: #000;
  text-decoration: none;
  transition: color 600ms ease-in-out, border 600ms ease-in-out;

  @media (min-width: 768px) {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.m};
    padding: 20px 0;
  }

  &:hover {
    color: #fff;
    border: 2px solid #fff;
  }

  &.selected {
    color: #fff;
    border: 2px solid #fff;
  }
`;

const NavLinks = ({
  isMenuOpen,
  menuAnimation,
  iconAnimation,
  setIsMenuOpen
}) => {
  const [forwardedRefs, setForwardedRefs] = useState();
  const navLinksWrapper = useRef();

  const history = useHistory();

  const handlePushToAnimation = url => {
    const { menuElement, iconElement } = forwardedRefs;
    gsap.to(menuElement, { width: "100%", duration: 0.5 });
    gsap.to(iconElement, { autoAlpha: 0, duration: 0.2 });
    gsap.to(navLinksWrapper.current, { autoAlpha: 0, duration: 0.2 });

    setTimeout(() => {
      history.push(url);
      window.scrollTo(0, 0);
      setIsMenuOpen(prevState => !prevState);
    }, 500);
  };

  useEffect(() => {
    setForwardedRefs({
      menuElement: menuAnimation.current,
      iconElement: iconAnimation.current
    });
  }, [menuAnimation, iconAnimation]);

  useEffect(() => {
    const animationItems = navLinksWrapper.current;

    gsap.set(animationItems, { autoAlpha: 0 });

    if (isMenuOpen) {
      gsap.to(animationItems, { autoAlpha: 1, duration: 0.5 });
    }

    if (!isMenuOpen) {
      gsap.to(animationItems, { autoAlpha: 0, duration: 0.5 });
    }
  }, [isMenuOpen]);

  return (
    <Wrapper ref={navLinksWrapper}>
      <StyledNavLink onClick={() => handlePushToAnimation("/")}>
        Home
      </StyledNavLink>

      <StyledNavLink onClick={() => handlePushToAnimation("/about")}>
        About me
      </StyledNavLink>

      <StyledNavLink onClick={() => handlePushToAnimation("/skills")}>
        Skills
      </StyledNavLink>

      <StyledNavLink onClick={() => handlePushToAnimation("/projects")}>
        Projects
      </StyledNavLink>

      <StyledNavLink onClick={() => handlePushToAnimation("/contact")}>
        Contact
      </StyledNavLink>

      <StyledNavLink onClick={() => handlePushToAnimation("/hobbies")}>
        Hobbies
      </StyledNavLink>
    </Wrapper>
  );
};

export default NavLinks;
