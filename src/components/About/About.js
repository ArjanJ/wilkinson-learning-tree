import React from "react";
import { Box } from "rebass";
import styled from "styled-components";

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
  <Section>
    <Wrapper>
      <Box mb="45px">
        <PageHeading textAlign="center">About Christine</PageHeading>
      </Box>
      <AboutImgWrapper mb="30px">
        <Image filename="conor-and-brody-wilkinson-learning-tree.png" />
      </AboutImgWrapper>
      <Box mb="30px">
        <p>
          My name’s Christine Wilkinson and I’m the mother of two wonderful
          boys, named Brody, 7, and Connor, almost 4 years old. I have 13+ years
          of exp. as an Education Assistant working with elementary special
          needs children at the Burnaby School Board. Previously, I had 15 years
          of experience working with children, aged 3 to 12, starting with
          babysitting and later as a qualified swimming instructor during the
          summer.
        </p>
      </Box>
      <Box mb="45px">
        <p>
          My extensive experience with children with severe food allergies,
          autism, or challenging behaviours, is what allows me to identify the
          needs of each individual child within my care.
        </p>
      </Box>
      <Box mb="30px">
        <PageSubheading>My Qualifications</PageSubheading>
      </Box>
      <Box mb="45px">
        <IconList data={qualificationsIconList} />
      </Box>
      <Box mb="30px">
        <p>
          I have a clean police record clearance and excellent references. I’m
          very passionate about staying healthy and fit. I enjoy running,
          swimming, and going to the gym. I really like helping children to grow
          and learn new things. I am well organized, enthusiastic, very clean
          and responsible.{" "}
        </p>
      </Box>
      <Box mb="30px">
        <p>
          I look forward to welcoming you to Wilkinson Learning Tree and caring
          for your child.
        </p>
      </Box>
      <Box>
        <p>
          Please feel free to contact me during working hours at{" "}
          <a href="tel:6045372396">(604) 537-2396</a>
        </p>
      </Box>
    </Wrapper>
  </Section>
);

const AboutPic = styled.img`
  border-radius: 3px;
  height: 180px;
  object-fit: cover;
  width: 100%;
`;

const AboutImgWrapper = styled(Box)`
  > div {
    max-height: 180px;
  }
`;
