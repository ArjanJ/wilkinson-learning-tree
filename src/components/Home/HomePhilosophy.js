import React from "react";
import { Box } from "rebass";
import styled from "styled-components";

import { IconList } from "../IconList";
import { Book, GlobeHands, Painting, PaperApple } from "../Icons";
import { Section } from "../Section";
import { Wrapper } from "../Wrapper";

export const philosophyIconList = [
  {
    icon: <GlobeHands />,
    text: "Guide children in a positive and respectful manner.",
  },
  {
    icon: <Painting />,
    text: "Encourage learning through play, exploration, music, and art.",
  },
  {
    icon: <Book />,
    text: "Learn about different cultures and religious backgrounds.",
  },
  {
    icon: <PaperApple />,
    text: "Ensure that their health and safety standards are met.",
  },
];

export const HomePhilosophy = () => (
  <Section>
    <Wrapper>
      <Box mb="30px">
        <Heading>Our Philosophy</Heading>
      </Box>
      <IconList data={philosophyIconList} />
    </Wrapper>
  </Section>
);

const Heading = styled.h2`
  font-size: 25px;
  text-align: center;
`;
