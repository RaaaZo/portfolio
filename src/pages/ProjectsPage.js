import React, { Fragment } from "react";

import HeroImage from "components/molecules/HeroImage";

import smallImage from "assets/images/hero-projects-small.jpg";
import mediumImage from "assets/images/hero-projects-medium.jpg";
import bigImage from "assets/images/hero-projects-big.jpg";
import veryBigImage from "assets/images/hero-projects-very-big.jpg";
import { Header } from "components/atoms/Header";
import ProjectCard from "components/molecules/ProjectCard";
import styled from "styled-components";
import { Paragraph } from "components/atoms/Paragraph";
import { projectsData } from "data";

const ProjectsWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    margin-bottom: 80px;
  }

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 90%;
  }

  @media (min-width: 1440px) {
    width: 80%;
  }
`;

const StyledHeader = styled(Header)`
  margin: 20px auto;
`;

const StyledParagraph = styled(Paragraph)`
  @media (min-width: 660px) {
    width: 90%;
  }
`;

const ProjectsPage = () => {
  return (
    <>
      <HeroImage
        veryBigImage={veryBigImage}
        bigImage={bigImage}
        mediumImage={mediumImage}
        smallImage={smallImage}
      />
      <StyledHeader title="true">Selected Projects</StyledHeader>
      <StyledParagraph semiBold="true">
        Below are some of the projects that I realized while learning JavaScript
        and React. Some of them also use Node.js and MongoDB. If I encounter any
        problems, I try to find a solution in the documentation. If I can't
        solve the problem myself, I refer to sites where people can direct me to
        the correct solution.
      </StyledParagraph>
      <ProjectsWrapper>
        {projectsData.map(card => (
          <Fragment key={card.id}>
            <ProjectCard
              title={card.title}
              descTop={card.descTop}
              descBottom={card.descBottom}
              live={card.live}
              code={card.code}
            />
          </Fragment>
        ))}
      </ProjectsWrapper>
    </>
  );
};

export default ProjectsPage;
