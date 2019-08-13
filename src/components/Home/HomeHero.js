import { Link } from "gatsby";
import React from "react";
import { Box } from "rebass";
import styled from "styled-components";

import { colors } from "../../utils/styleUtils";
import { Button } from "../Button";
import { Section } from "../Section";
import { Wrapper } from "../Wrapper";

export const HomeHero = () => (
  <HomeSection>
    <Wrapper>
      <Box mb="45px">
        <Heading>Welcome to the Wilkinson Learning Tree</Heading>
        <Subheading>
          We’re a <strong>family daycare</strong> in{" "}
          <strong>Maple Ridge</strong> specializing in care for children between{" "}
          <strong>1 and 5 years old</strong>.
        </Subheading>
      </Box>
      <Box mb="15px">
        <Button kind="primary" type="button" width={196}>
          Get in touch
        </Button>
      </Box>
      <Box>
        <Button as={Link} kind="secondary" to="/services" width={196}>
          About our daycare
        </Button>
      </Box>
    </Wrapper>
  </HomeSection>
);

const HomeSection = styled(Section)`
  text-align: center;
`;

const Heading = styled.h1`
  color: ${colors.BLUE};
  line-height: 1.25;
  margin: 0 auto 22px;
  max-width: 288px;
`;

const Subheading = styled.h2`
  font-family: "Work Sans";
  font-size: 16px;
  font-weight: 400;
`;
