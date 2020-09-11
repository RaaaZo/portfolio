import React from "react";
import styled from "styled-components";

import { Img } from "components/atoms/Img";

const HeroImageWrapper = styled.div`
  width: 100%;
  height: 200px;

  @media (min-width: 768px) {
    height: 350px;
  }

  @media (min-width: 1440px) {
    height: 500px;
  }
`;

const HeroImage = ({ smallImage, mediumImage, bigImage, veryBigImage }) => {
  return (
    <HeroImageWrapper>
      <picture>
        <source srcSet={veryBigImage} media="(min-width: 1440px)" />
        <source srcSet={bigImage} media="(min-width: 1024px)" />
        <source srcSet={mediumImage} media="(min-width: 500px)" />
        <Img srcSet={smallImage} />
      </picture>
    </HeroImageWrapper>
  );
};

export default HeroImage;
