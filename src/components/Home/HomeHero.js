import { Link } from "gatsby";
import React from "react";
import { Box } from "rebass";
import scrollToElement from "scroll-to-element";
import styled from "styled-components";

import { colors } from "../../utils/styleUtils";
import { Button } from "../Button/";
import { PageHeading } from "../PageHeading/";
import { Section } from "../Section/";
import { Wrapper } from "../Wrapper/";

const onGetInTouchClick = () =>
  scrollToElement("#get-in-touch-form", {
    offset: 0,
    ease: "outCube",
    duration: 800,
  });

export const HomeHero = () => (
  <HomeSection>
    <Wrapper>
      <Box mb="45px">
        <PageHeading>Welcome to the Wilkinson Learning Tree</PageHeading>
        <Subheading>
          We’re a <strong>family daycare</strong> in{" "}
          <strong>Maple Ridge</strong> specializing in care for children between{" "}
          <strong>1 and 5 years old</strong>.
        </Subheading>
      </Box>
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
    </Wrapper>
  </HomeSection>
);

const HomeSection = styled(Section)`
  text-align: center;
`;

const Subheading = styled.h2`
  font-family: "Work Sans";
  font-size: 16px;
  font-weight: 400;
`;
