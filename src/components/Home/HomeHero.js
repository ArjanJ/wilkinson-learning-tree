import { Link } from "gatsby";
import React from "react";
import { Box, Flex } from "rebass";
import scrollToElement from "scroll-to-element";
import styled from "styled-components";

import { colors, mq } from "../../utils/styleUtils";
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
          <HomeHeadingGroup mb="45px">
            <HomeHeading>Welcome to the Wilkinson Learning Tree</HomeHeading>
            <Subheading>
              We’re a <strong>family daycare</strong> in{" "}
              <strong>Maple Ridge</strong> specializing in care for children
              between <strong>1 and 5 years old</strong>.
            </Subheading>
          </HomeHeadingGroup>
          <HomeButtons>
            <Box mb="15px">
              <Button
                kind="primary"
                onClick={onGetInTouchClick}
                type="button"
                width="196px"
              >
                Get in touch
              </Button>
            </Box>
            <Box>
              <Button as={Link} kind="secondary" to="/services" width="196px">
                About our daycare
              </Button>
            </Box>
          </HomeButtons>
        </HomeText>
        <HomeImg ml="135px">
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
  text-align: center;

  @media ${mq.MOBILE} {
    align-items: center;
    display: flex;
    min-height: 645px;
    text-align: left;
  }
`;

const HomeWrapper = styled(Wrapper)`
  @media ${mq.MOBILE} {
    width: 100%;
  }
`;

const HomeInnerWrapper = styled(Flex)`
  display: block;

  @media ${mq.MOBILE} {
    align-items: center;
    display: flex;
  }
`;

const HomeHeading = styled(PageHeading)`
  @media ${mq.MOBILE} {
    font-size: 40px;
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

const HomeText = styled(Box)`
  @media ${mq.MOBILE} {
    flex: 1;
  }
`;

const HomeHeadingGroup = styled(Box)``;

const HomeImg = styled(Box)`
  display: none;

  @media ${mq.MOBILE} {
    display: block;
    flex: 1;
  }
`;

const HomeButtons = styled(Box)`
  display: block;

  @media ${mq.MOBILE} {
    display: flex;

    > div:last-child {
      margin-left: 15px;
    }
  }
`;
