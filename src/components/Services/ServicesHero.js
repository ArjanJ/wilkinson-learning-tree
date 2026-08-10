import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { colors, mq } from "../../utils/styleUtils";
import { philosophyIconList } from "../Home/HomePhilosophy";
import { Abc, KidBall, TwoPeople } from "../Icons/";
import { IconList } from "../IconList/";
import { Image } from "../image";
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
  <ServicesContent>
    <Section bottom={false}>
      <Wrapper>
        <PageHeading textAlign="center">Our Daycare Services</PageHeading>
        <Flex>
          <ServicesIntro>
            <p>
              At the Wilkinson Learning Tree family daycare, we believe that we
              can offer the best services in Maple Ridge when it comes to
              daycare for children between the ages of 1 and 5.
            </p>
          </ServicesIntro>
          <ServicesIconList>
            <IconList data={servicesIconList} />
          </ServicesIconList>
        </Flex>
        <Flex>
          <FeatureImage>
            <Image filename="05-wilkinson-daycare.jpg" />
          </FeatureImage>
          <ServiceCopy>
            <IntroCopy>
              <p>
                <BoldText>
                  Our days will be fun-filled through the use of different
                  engaging activities.{" "}
                </BoldText>
              </p>
            </IntroCopy>
            <ImageSection>
              <CopyParagraph>
                I’ll make sure that your child will be safe and secure within
                our daycare and treat each child as if they were my own; no
                matter what race, religion or gender. They’ll be treated with
                respect at all times. By showing lots of love and affection,
                your child will feel at ease and at home. This will reduce any
                anxiety or fear your child may have in a new environment.
                Lastly, all members of our family will welcome your child.
              </CopyParagraph>

              <Image filename="06-wilkinson-daycare.jpg" />
            </ImageSection>
          </ServiceCopy>
        </Flex>
        <Flex>
          <AboutImgWrapper>
            <Image filename="07-wilkinson-daycare.jpg" />
          </AboutImgWrapper>
          <ServiceCopy>
            <ImageSection>
              <PageSubheading>Our Philosophy</PageSubheading>
              <PhilosophyCopy>
                “In the field of early childhood education we hold a certain set
                of beliefs when it comes to the care and education of young
                children... Our philosophy begins with our belief that educators
                need to plan, implement, observe and evaluate activities for
                children. It is through these activities that children learn...”
              </PhilosophyCopy>

              <IconListWrapper>
                <IconList data={philosophyIconList} />
              </IconListWrapper>

              <Image filename="08-wilkinson-daycare.jpg" />
            </ImageSection>
          </ServiceCopy>
        </Flex>
      </Wrapper>
      <SectionSpacer />
    </Section>
    <AboutPlug>
      <AboutPlugWrapper>
        <AboutPlugImgWrapper>
          <Image filename="04-conor-and-brody-wilkinson-learning-tree.png" />
        </AboutPlugImgWrapper>
        <AboutPlugLink to="/about">
          Read about Christine Wilkinson
        </AboutPlugLink>
      </AboutPlugWrapper>
    </AboutPlug>
  </ServicesContent>
);

const ServicesContent = styled.div`
  padding-top: 60px;

  @media ${mq.MOBILE} {
    padding-top: 135px;
  }
`;

const Flex = styled.div`
  @media ${mq.MOBILE} {
    display: flex;
  }
`;

const ServicesIntro = styled.div`
  flex: 1;
  margin-bottom: 45px;
`;

const ServicesIconList = styled.div`
  flex: 2;
  margin-bottom: 45px;

  @media ${mq.MOBILE} {
    margin-left: 90px;
  }
`;

const FeatureImage = styled.div`
  flex: 1;
  margin-bottom: 45px;

  @media ${mq.MOBILE} {
    margin-bottom: 90px;
  }
`;

const ServiceCopy = styled.div`
  flex: 1;

  @media ${mq.MOBILE} {
    margin-left: 90px;
  }
`;

const IntroCopy = styled.div`
  margin-bottom: 30px;
`;

const ImageSection = styled.div`
  margin-bottom: 45px;
`;

const CopyParagraph = styled.p`
  margin-bottom: 45px;
`;

const PhilosophyCopy = styled.p`
  margin-bottom: 30px;
`;

const IconListWrapper = styled.div`
  margin-bottom: 45px;
`;

const SectionSpacer = styled.div`
  margin-bottom: 60px;
`;

const BoldText = styled.strong`
  font-family: "Gilroy", sans-serif;

  @media ${mq.MOBILE} {
    font-size: 20px;
  }
`;

const AboutPlug = styled.div`
  background: ${colors.LIGHT_GREY};
  padding: 30px 0;
`;

const AboutPlugWrapper = styled(Wrapper)`
  align-items: center;
  display: flex;

  @media ${mq.MOBILE} {
    justify-content: center;
  }
`;

const AboutPlugImgWrapper = styled.div`
  flex: 1;
  margin-bottom: 45px;

  > div {
    border-radius: 50%;
    height: 90px;
    width: 90px;
  }
`;

const AboutPlugLink = styled(Link)`
  color: ${colors.BLUE};
  font-family: "Gilroy", sans-serif;
  font-size: 18px;
  margin-left: 22px;
  text-decoration: none;
`;

const AboutImgWrapper = styled.div`
  flex: 1;
  margin-bottom: 45px;
  > div {
    max-height: 180px;

    @media ${mq.MOBILE} {
      max-height: 390px;
    }
  }
`;
