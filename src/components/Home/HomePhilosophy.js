import React from "react";
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
  <HomePhilosophySection>
    <Section>
      <HomePhilWrapper>
        <HeadingWrapper>
          <Heading>Our Philosophy</Heading>
        </HeadingWrapper>
        <IconListWrapper>
          <IconList data={philosophyIconList} />
        </IconListWrapper>
      </HomePhilWrapper>
    </Section>
  </HomePhilosophySection>
);

const HomePhilosophySection = styled.div`
  padding-top: 60px;

  @media ${mq.MOBILE} {
    padding-top: 0;
  }
`;

const HeadingWrapper = styled.div`
  flex: 1;
  margin-bottom: 30px;
`;

const IconListWrapper = styled.div`
  flex: 2;
`;

const Heading = styled.h2`
  font-size: 25px;
  text-align: center;

  @media ${mq.MOBILE} {
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
