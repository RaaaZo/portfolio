import React, { useRef, useEffect, useCallback } from "react";
import { ReactComponent as HomeAnimation } from "assets/svg/home.svg";
import styled from "styled-components";
import gsap from "gsap";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #ffde03;
`;

const StyledHomeAnimation = styled(HomeAnimation)`
  width: 100%;
  height: 100%;
`;

const HomePage = () => {
  let homeBackground = useRef(null);

  const history = useHistory();

  const tl = gsap.timeline();

  const handleHomeAnimation = useCallback(
    ({
      name,
      role,
      laptop,
      notebook,
      smallSetting,
      settings,
      border,
      about,
      skills,
      projects,
      contact,
      hobbies,
      circle,
      arrow
    }) => {
      const icons = [about, skills, projects, contact, hobbies];
      const innerCircleIcons = [laptop, notebook, settings];

      gsap.set([icons, innerCircleIcons, arrow], {
        autoAlpha: 0,
        ease: "Sine.easeOut"
      });
      gsap.set([icons], { scale: 0.95, cursor: "pointer" });

      tl.fromTo(
        circle,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.3, delay: 0.5 }
      )
        .fromTo(
          [name, role],
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 2, stagger: 0.3 }
        )
        .fromTo(
          innerCircleIcons,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.5, stagger: 0.3 },
          "-=1.5"
        )
        .addLabel("atTheSameTime")
        .fromTo(
          laptop,
          { x: "-=6%" },
          {
            x: "0",
            yoyo: -1,
            repeat: -1,
            duration: 6,
            repeatDelay: 4
          },
          "atTheSameTime"
        )
        .fromTo(
          notebook,
          { scale: 1 },
          {
            scale: 1.2,
            yoyo: -1,
            repeat: -1,
            duration: 5,
            repeatDelay: 3
          },
          "atTheSameTime"
        )
        .fromTo(
          smallSetting,
          { rotate: 0 },
          {
            rotate: 360,
            transformOrigin: "center",
            repeat: -1,
            duration: 4,
            repeatDelay: 2
          },
          "atTheSameTime"
        )
        .fromTo(
          border,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            duration: 1
          },
          "atTheSameTime-=1"
        )
        .fromTo(
          icons,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 1, stagger: 0.3 },
          "atTheSameTime"
        )
        .addLabel("borderWithIcons")
        .fromTo(
          border,
          { rotate: 0 },
          {
            rotate: 360,
            repeat: -1,
            transformOrigin: "center",
            duration: 60
          },
          "borderWithIcons -=3"
        )
        .fromTo(
          icons,
          {
            scale: 0.95
          },
          {
            scale: 1,
            repeat: -1,
            duration: 0.5,
            yoyo: true,
            ease: "RoughEase.ease",
            delay: 2,
            stagger: 0.3
          },
          "borderWithIcons"
        )
        .fromTo(
          arrow,
          { y: "+=5" },
          { y: "-=20", autoAlpha: 1, duration: 1, repeat: -1, yoyo: true },
          "borderWithIcons"
        );
    },
    [tl]
  );

  const handleOnClick = useCallback(
    (
      el,
      url,
      {
        circle,
        settings,
        name,
        role,
        laptop,
        notebook,
        border,
        about,
        skills,
        projects,
        contact,
        hobbies,
        arrow
      }
    ) => {
      el.addEventListener("click", () => {
        tl.kill();

        gsap.to([circle, border], {
          scale: 1.6,
          transformOrigin: "center",
          duration: 2
        });

        gsap.to([about, skills, projects, contact, hobbies, arrow], {
          autoAlpha: 0,
          duration: 0.5
        });

        gsap.to([name, role, laptop, notebook, settings], {
          autoAlpha: 0,
          duration: 1
        });

        gsap.fromTo(
          border,
          { rotate: 0 },
          {
            rotate: -360,
            transformOrigin: "center",
            duration: 3,
            repeat: -1,
            ease: "linear"
          }
        );

        setTimeout(() => {
          history.push(url);
        }, 2000);
      });
    },
    [history, tl]
  );

  useEffect(() => {
    const [elements] = homeBackground.current.children;

    const circle = elements.getElementById("circle");
    const name = circle.children[2];
    const role = circle.children[1];
    const laptop = circle.children[3];
    const notebook = circle.children[4];
    const settings = circle.children[5];
    const smallSetting = settings.children[0];
    const border = elements.getElementById("border");
    const arrow = elements.getElementById("arrow");
    const about = elements.getElementById("about");
    const skills = elements.getElementById("skills");
    const projects = elements.getElementById("projects");
    const contact = elements.getElementById("contact");
    const hobbies = elements.getElementById("hobbies");

    const elementsToAnimate = {
      circle,
      settings,
      name,
      role,
      laptop,
      notebook,
      smallSetting,
      border,
      about,
      skills,
      projects,
      contact,
      hobbies,
      arrow
    };

    handleHomeAnimation(elementsToAnimate);
    handleOnClick(about, "/about", elementsToAnimate);
    handleOnClick(skills, "/skills", elementsToAnimate);
    handleOnClick(projects, "/projects", elementsToAnimate);
    handleOnClick(contact, "/contact", elementsToAnimate);
    handleOnClick(hobbies, "/hobbies", elementsToAnimate);
  }, [homeBackground, handleHomeAnimation, handleOnClick]);

  return (
    <>
      <Wrapper ref={homeBackground}>
        <StyledHomeAnimation />
      </Wrapper>
    </>
  );
};

export default HomePage;
