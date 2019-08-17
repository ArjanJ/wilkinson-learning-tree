import React from "react";
import { Box } from "rebass";
import styled from "styled-components";

import { mq } from "../../utils/styleUtils";
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
    <HomePhilWrapper>
      <Box flex={1} mb="30px">
        <Heading>Our Philosophy</Heading>
      </Box>
      <Box flex={2}>
        <IconList data={philosophyIconList} />
      </Box>
    </HomePhilWrapper>
  </Section>
);

const Heading = styled.h2`
  font-size: 25px;
  text-align: center;

  @media ${mq.mobile} {
    font-size: 36px;
    text-align: left;
  }
`;

const HomePhilWrapper = styled(Wrapper)`
  @media ${mq.MOBILE} {
    align-items: flex-start;
    display: flex;
    width: 100%;
  }
`;
