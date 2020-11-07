import React from "react";

import HeroImage from "components/molecules/HeroImage";
import { Header } from "components/atoms/Header";

import smallImage from "assets/images/hero-contact-small.jpg";
import mediumImage from "assets/images/hero-contact-medium.jpg";
import bigImage from "assets/images/hero-contact-big.jpg";
import veryBigImage from "assets/images/hero-contact-very-big.jpg";
import ContactButton from "components/molecules/ContactButton";
import { PagesWrapper } from "components/atoms/PagesWrapper";
import { Paragraph } from "components/atoms/Paragraph";

const ContactPage = () => {
  return (
    <>
      <HeroImage
        veryBigImage={veryBigImage}
        bigImage={bigImage}
        mediumImage={mediumImage}
        smallImage={smallImage}
      />
      <PagesWrapper>
        <Header title>Contact</Header>
        <Paragraph semiBold="true">
          I am looking for my next commercial experience after six months of
          internship, where I will be able to learn many new things and develop
          my skills even faster. If you want to contact me about work or
          cooperation feel free to use one of the methods below.
        </Paragraph>
        <ContactButton />
      </PagesWrapper>
    </>
  );
};

export default ContactPage;
