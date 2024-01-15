import React from "react";
import { Box } from "rebass";
import styled from "styled-components";

import { mq } from "../../utils/styleUtils";
import { IconList } from "../IconList/";
import { Image } from "../image";
import { Books, Chalkboard, Diploma, FirstAid, Speech } from "../Icons/";
import { PageHeading } from "../PageHeading/";
import { PageSubheading } from "../PageSubheading/";
import { Section } from "../Section/";
import { Wrapper } from "../Wrapper/";

const qualificationsIconList = [
  {
    icon: <Diploma />,
    text: "Youth Justice Worker Diploma",
  },
  {
    icon: <Chalkboard />,
    text: "Pre-teacher courses",
  },
  {
    icon: <FirstAid />,
    text: "First Aid Certificate",
  },
  {
    icon: <Speech />,
    text: "Non-Violent Crisis Intervention",
  },
  {
    icon: <Books />,
    text: "Good Beginnings Course",
  },
];

export const About = () => (
  <Box pt={["60px", "135px"]}>
    <Section>
      <Wrapper>
        <Box mb="45px">
          <PageHeading textAlign="center">About Christine</PageHeading>
        </Box>
        <Flex>
          <AboutImgWrapper mb={["30px", "90px"]}>
            <Image filename="christine-blob-wilkinson-learning-tree.png" />
          </AboutImgWrapper>
          <Box flex={1} ml={[0, "60px"]}>
            <Box mb="30px">
              <P>
                My name’s Christine Wilkinson and I’m the mother of two
                wonderful boys, named Brody, 12, and Connor, 9 years old.
                I have 13+ years of experience as an Educational Assistant
                working with elementary special needs children at the Burnaby
                School Board. Previously, I had 15 years of experience working
                with children, aged 3 to 12, starting with babysitting and later
                as a qualified swimming instructor during the summer.
              </P>
            </Box>
            <Box mb="45px">
              <P>
                My extensive experience with children with severe food
                allergies, autism, or challenging behaviours, is what allows me
                to identify the needs of each individual child within my care.
              </P>
            </Box>
          </Box>
        </Flex>
        <Box mb="30px">
          <PageSubheading>My Qualifications</PageSubheading>
        </Box>
        <Box mb="45px">
          <IconList data={qualificationsIconList} />
        </Box>
        <Flex>
          <Box flex={1}>
            <Box mb="30px">
              <P>
                I have a clean police record clearance and excellent references.
                I’m very passionate about staying healthy and fit. I enjoy
                running, swimming, and going to the gym. I really like helping
                children to grow and learn new things. I am well organized,
                enthusiastic, very clean and responsible.{" "}
              </P>
            </Box>
            <Box mb="30px">
              <P>
                I look forward to welcoming you to Wilkinson Learning Tree and
                caring for your child.
              </P>
            </Box>
            <Box>
              <P>
                Please feel free to contact me during working hours at{" "}
                <a href="tel:6045372396">(604) 537-2396</a>
              </P>
            </Box>
          </Box>
          <Box flex={1}></Box>
        </Flex>
      </Wrapper>
    </Section>
  </Box>
);

const AboutImgWrapper = styled(Box)`
  flex: 1;

  > div {
    max-width: 345px;

    @media ${mq.MOBILE} {
      max-height: none;
      max-width: 435px;
    }
  }
`;

const Flex = styled.div`
  @media ${mq.MOBILE} {
    display: flex;
  }
`;

const P = styled.p`
  font-size: 16px;

  @media ${mq.MOBILE} {
    font-size: 18px;
  }
`;
