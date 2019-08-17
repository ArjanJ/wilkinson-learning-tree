import { Gallery } from "gatsby-theme-gallery";
import React from "react";
import { Box } from "rebass";
import styled from "styled-components";

import { mq } from "../../utils/styleUtils";
import { PageHeading } from "../PageHeading/PageHeading";
import { Section } from "../Section/Section";

export const Photos = () => (
  <Box pt={["60px", "135px"]}>
    <Section>
      <PageHeading textAlign="center">Photos</PageHeading>
      <Wrapper>
        <Gallery />
      </Wrapper>
    </Section>
  </Box>
);

const Wrapper = styled.div`
  @media ${mq.MOBILE} {
    max-width: 1140px;
    margin: auto;
    padding: 0 30px;
  }
`;
