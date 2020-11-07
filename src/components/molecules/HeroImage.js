import React from "react";
import styled from "styled-components";

import { Img } from "components/atoms/Img";
import ProgressiveImage from "react-progressive-graceful-image";

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
      <ProgressiveImage
        srcSetData={{
          srcSet: `${smallImage} 640w, ${mediumImage} 1280w, ${bigImage} 1920w, ${veryBigImage} 2560w`,
          sizes: "(max-width: 2560px) 100vw, 2560px"
        }}
        src={veryBigImage}
        placeholder={smallImage}
      >
        {(src, loading, srcSetData) => (
          <Img
            srcSet={srcSetData.srcSet}
            sizes={srcSetData.sizes}
            src={src}
            alt="an alternative text"
          />
        )}
      </ProgressiveImage>
    </HeroImageWrapper>
  );
};

export default HeroImage;
