import React from "react";

import HeroImage from "components/molecules/HeroImage";

import smallImage from "assets/images/hero-about-small.jpg";
import mediumImage from "assets/images/hero-about-medium.jpg";
import bigImage from "assets/images/hero-about-big.jpg";
import veryBigImage from "assets/images/hero-about-very-big.jpg";
import { Header } from "components/atoms/Header";
import { Paragraph } from "components/atoms/Paragraph";
import { PagesWrapper } from "components/atoms/PagesWrapper";
import PagesAnimations from "components/molecules/PagesAnimations";

import about1 from "assets/images/about1.jpg";
import about2 from "assets/images/about2.jpg";
import { Span } from "components/atoms/Span";

const AboutPage = () => {
  return (
    <>
      <HeroImage
        veryBigImage={veryBigImage}
        bigImage={bigImage}
        mediumImage={mediumImage}
        smallImage={smallImage}
      />
      <PagesWrapper>
        <Header title="true">About me</Header>
        <Header>
          Hi, My name is <Span>Mateusz Koprowicz</Span> and I’m 24 years old
          former student of <Span>Naval Academy</Span> in Gdynia. Whose started
          learning programming from February 2020.
        </Header>
        <Paragraph>
          In August 2020, I graduated from the second-cycle studies in
          Information Systems in Security, specialization:
          <Span> Information Systems in Security</Span>. At the end of my first
          year of studies, I started my adventure with programming at the
          university. However, I started to expand my competences in February
          this year. I focus on the development and deepening of knowledge.
          Programming has become my passion. I am a communicative language and
          open to new challenges. I love learning new things. I perform the
          entrusted task with care and accuracy.
        </Paragraph>
      </PagesWrapper>

      <PagesAnimations firstSideImage={about1} secondSideImage={about2} />
    </>
  );
};

export default AboutPage;
