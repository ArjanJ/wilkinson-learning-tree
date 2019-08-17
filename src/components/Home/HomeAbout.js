import { Link } from "gatsby";
import React from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";

import { mq } from "../../utils/styleUtils";
import { Button } from "../Button/";
import { Section } from "../Section/";
import { Wrapper } from "../Wrapper/";
import { Image } from "../image";

export const HomeAbout = () => (
  <Section top={false}>
    <HomeAboutWrapper>
      <Box flex={1} mb="30px">
        <Pic>
          <Image
            alt="Children at the Wilkinson Learning Tree."
            filename="conor-and-brody-wilkinson-learning-tree.png"
          />
        </Pic>
        <AboutDesktopPic>
          <Image
            alt="Children at the Wilkinson Learning Tree."
            filename="conor-brody-blob-wilkinson-learning-tree.png"
          />
        </AboutDesktopPic>
      </Box>
      <Box flex={1}>
        <Box mb="45px">
          <P>
            Hi! My name’s Christine Wilkinson and I’m the mother of two
            wonderful boys, Brody, 7, and Connor, who’s almost 4 years old. I
            have 13+ years of exp. as an Education Assistant working with
            elementary special needs children at the Burnaby School Board.
          </P>
        </Box>
        <Flex justifyContent={["center", "flex-start"]}>
          <Button as={Link} kind="secondary" to="/about">
            Read more about me
          </Button>
        </Flex>
      </Box>
    </HomeAboutWrapper>
  </Section>
);

const Pic = styled.div`
  > div {
    border-radius: 50%;
    margin: auto;
    height: 120px;
    width: 120px;
  }

  @media ${mq.MOBILE} {
    display: none;
  }
`;

const HomeAboutWrapper = styled(Wrapper)`
  @media ${mq.MOBILE} {
    align-items: center;
    display: flex;
  }
`;

const AboutDesktopPic = styled.div`
  display: none;
  max-width: 450px;

  @media ${mq.MOBILE} {
    display: block;
  }
`;

const P = styled.p`
  @media ${mq.MOBILE} {
    font-size: 20px;
  }
`;
