import React from "react";
import styled from "styled-components";

import { mq } from "../../utils/styleUtils";
import Gallery from "./Gallery";
import { PageHeading } from "../PageHeading/PageHeading";
import { Section } from "../Section/Section";

export const Photos = () => (
  <PhotosContent>
    <Section>
      <PageHeading textAlign="center">Photos</PageHeading>
      <Wrapper>
        <Gallery />
      </Wrapper>
    </Section>
  </PhotosContent>
);

const PhotosContent = styled.div`
  padding-top: 60px;

  @media ${mq.MOBILE} {
    padding-top: 135px;
  }
`;

const Wrapper = styled.div`
  @media ${mq.MOBILE} {
    max-width: 1140px;
    margin: auto;
    padding: 0 30px;
  }
`;
