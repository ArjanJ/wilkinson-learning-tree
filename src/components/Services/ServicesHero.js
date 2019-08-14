import { Link } from "gatsby";
import React from "react";
import { Box } from "rebass";
import styled from "styled-components";

import { colors } from "../../utils/styleUtils";
import { philosophyIconList } from "../Home/HomePhilosophy";
import { Abc, KidBall, TwoPeople } from "../Icons/";
import { IconList } from "../IconList/";
import { PageHeading } from "../PageHeading/";
import { PageSubheading } from "../PageSubheading/";
import { Section } from "../Section/";
import { Wrapper } from "../Wrapper/";

const servicesIconList = [
  {
    icon: <KidBall />,
    text: "We help develop fine motor and sensory skills",
  },
  {
    icon: <Abc />,
    text: "Promote education through play based learning",
  },
  {
    icon: <TwoPeople />,
    text: "Improve interaction and interpersonal skills with others",
  },
];

export const ServicesHero = () => (
  <>
    <Section bottom={false}>
      <Wrapper>
        <Box mb="45px">
          <PageHeading textAlign="center">Our Daycare Services</PageHeading>
          <p>
            At the Wilkinson Learning Tree family daycare, we believe that we
            can offer the best services in Maple Ridge when it comes to daycare
            for children between the ages of 1 and 5.
          </p>
        </Box>
        <Box mb="45px">
          <IconList data={servicesIconList} />
        </Box>
        <Box mb="30px">
          <p>
            <BoldText>
              Our days will be fun-filled through the use of different engaging
              activities.{" "}
            </BoldText>
          </p>
        </Box>
        <Box mb="45px">
          <p>
            I’ll make sure that your child will be safe and secure within our
            daycare and treat each child as if they were my own; no matter what
            race, religion or gender. They’ll be treated with respect at all
            times. By showing lots of love and affection, your child will feel
            at ease and at home. This will reduce any anxiety or fear your child
            may have in a new environment. Lastly, all members of our family
            will welcome your child.
          </p>
        </Box>
        <Box mb="45px">
          <PageSubheading>Our Philosophy</PageSubheading>
          <p>
            “In the field of early childhood education we hold a certain set of
            beliefs when it comes to the care and education of young children...
            Our philosophy begins with our belief that educators need to plan,
            implement, observe and evaluate activities for children. It is
            through these activities that children learn...”
          </p>
        </Box>
        <Box>
          <IconList data={philosophyIconList} />
        </Box>
      </Wrapper>
      <Box mb="60px" />
    </Section>
    <AboutPlug>
      <AboutPlugWrapper>
        <AboutPlugPic
          alt="Christine Wilkinson"
          src="https://picsum.photos/300/300"
        />
        <AboutPlugLink to="/about">
          Read about Christine Wilkinson
        </AboutPlugLink>
      </AboutPlugWrapper>
    </AboutPlug>
  </>
);

const BoldText = styled.strong`
  font-family: "Gilroy";
`;

const AboutPlug = styled.div`
  background: ${colors.LIGHT_GREY};
  padding: 30px 0;
`;

const AboutPlugWrapper = styled(Wrapper)`
  align-items: center;
  display: flex;
`;

const AboutPlugPic = styled.img`
  border-radius: 50%;
  display: flex;
  flex: 1;
  height: 90px;
  width: 90px;
`;

const AboutPlugLink = styled(Link)`
  color: ${colors.BLUE};
  font-family: "Gilroy";
  font-size: 18px;
  margin-left: 22px;
  text-decoration: none;
`;
