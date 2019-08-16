import { Gallery } from "gatsby-theme-gallery";
import React from "react";

import { PageHeading } from "../PageHeading/PageHeading";
import { Section } from "../Section/Section";

export const Photos = () => (
  <Section>
    <PageHeading textAlign="center">Photos</PageHeading>
    <Gallery />
  </Section>
);
