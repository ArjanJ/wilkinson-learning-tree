import { Link } from "gatsby";
import React from "react";
import scrollToElement from "scroll-to-element";
import styled from "styled-components";

import { mq } from "../../utils/styleUtils";
import { Button } from "../Button/";
import { PageHeading } from "../PageHeading/";
import { Section } from "../Section/";
import { Wrapper } from "../Wrapper/";
import { Image } from "../image";

const onGetInTouchClick = () =>
  scrollToElement("#get-in-touch-form", {
    offset: 0,
    ease: "outCube",
    duration: 800,
  });

export const HomeHero = () => (
  <HomeSection>
    <HomeWrapper>
      <HomeInnerWrapper>
        <HomeText>
          <HeroCopy>
            <HomeHeading>Welcome to the Wilkinson Learning Tree</HomeHeading>
            <Subheading>
              We’re a family daycare in <strong>Maple Ridge</strong>{" "}
              specializing in care for children between{" "}
              <strong>1 and 5 years old</strong>.
            </Subheading>
          </HeroCopy>
          <HomeButtons>
            <PrimaryButtonWrapper>
              <Button
                kind="primary"
                onClick={onGetInTouchClick}
                type="button"
                width="196px"
              >
                Get in touch
              </Button>
            </PrimaryButtonWrapper>
            <SecondaryButtonWrapper>
              <Button as={Link} kind="secondary" to="/services" width="196px">
                About our daycare
              </Button>
            </SecondaryButtonWrapper>
          </HomeButtons>
        </HomeText>
        <HomeImg>
          <Image
            alt="Child playing with toy plane."
            filename="brody-blob-wilkinson-learning-tree.png"
          />
        </HomeImg>
      </HomeInnerWrapper>
    </HomeWrapper>
  </HomeSection>
);

const HomeSection = styled(Section)`
  padding-top: 60px;
  text-align: center;

  @media ${mq.MOBILE} {
    align-items: center;
    display: flex;
    min-height: calc(80vh);
    padding-top: 90px;
    text-align: left;
  }
`;

const HomeWrapper = styled(Wrapper)`
  @media ${mq.MOBILE} {
    width: 100%;
  }
`;

const HomeInnerWrapper = styled.div`
  display: block;

  @media ${mq.MOBILE} {
    align-items: center;
    display: flex;
  }
`;

const HomeHeading = styled(PageHeading)`
  @media ${mq.MOBILE} {
    font-size: 40px;
    line-height: 1.3;
    margin-bottom: 30px;
  }
`;

const Subheading = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;

  @media ${mq.MOBILE} {
    font-size: 18px;
  }
`;

const HomeText = styled.div`
  @media ${mq.MOBILE} {
    flex: 1;
  }
`;

const HomeImg = styled.div`
  display: none;

  @media ${mq.MOBILE} {
    display: block;
    flex: 1;
    margin-left: 135px;
  }
`;

const HeroCopy = styled.div`
  margin-bottom: 45px;
`;

const HomeButtons = styled.div`
  display: block;

  @media ${mq.MOBILE} {
    display: flex;

    > div:last-child {
      margin-left: 15px;
    }
  }
`;

const PrimaryButtonWrapper = styled.div`
  margin-bottom: 15px;
`;

const SecondaryButtonWrapper = styled.div``;
