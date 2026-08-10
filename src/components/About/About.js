import React from "react";
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
  <AboutContent>
    <Section>
      <Wrapper>
        <HeadingWrapper>
          <PageHeading textAlign="center">About Christine</PageHeading>
        </HeadingWrapper>
        <Flex>
          <AboutImgWrapper>
            <Image filename="christine-blob-wilkinson-learning-tree.png" />
          </AboutImgWrapper>
          <AboutCopy>
            <IntroCopy>
              <P>
                My name’s Christine Wilkinson and I’m the mother of two
                wonderful boys, named Brody, 12, and Connor, 9 years old.
                I have 13+ years of experience as an Educational Assistant
                working with elementary special needs children at the Burnaby
                School Board. Previously, I had 15 years of experience working
                with children, aged 3 to 12, starting with babysitting and later
                as a qualified swimming instructor during the summer.
              </P>
            </IntroCopy>
            <SummaryCopy>
              <P>
                My extensive experience with children with severe food
                allergies, autism, or challenging behaviours, is what allows me
                to identify the needs of each individual child within my care.
              </P>
            </SummaryCopy>
          </AboutCopy>
        </Flex>
        <QualificationHeading>
          <PageSubheading>My Qualifications</PageSubheading>
        </QualificationHeading>
        <QualificationList>
          <IconList data={qualificationsIconList} />
        </QualificationList>
        <Flex>
          <Biography>
            <BiographyCopy>
              <P>
                I have a clean police record clearance and excellent references.
                I’m very passionate about staying healthy and fit. I enjoy
                running, swimming, and going to the gym. I really like helping
                children to grow and learn new things. I am well organized,
                enthusiastic, very clean and responsible.{" "}
              </P>
            </BiographyCopy>
            <BiographyCopy>
              <P>
                I look forward to welcoming you to Wilkinson Learning Tree and
                caring for your child.
              </P>
            </BiographyCopy>
            <div>
              <P>
                Please feel free to contact me during working hours at{" "}
                <a href="tel:6045372396">(604) 537-2396</a>
              </P>
            </div>
          </Biography>
          <EmptyColumn />
        </Flex>
      </Wrapper>
    </Section>
  </AboutContent>
);

const AboutContent = styled.div`
  padding-top: 60px;

  @media ${mq.MOBILE} {
    padding-top: 135px;
  }
`;

const HeadingWrapper = styled.div`
  margin-bottom: 45px;
`;

const AboutImgWrapper = styled.div`
  flex: 1;
  margin-bottom: 30px;

  > div {
    max-width: 345px;

    @media ${mq.MOBILE} {
      max-height: none;
      max-width: 435px;
    }
  }

  @media ${mq.MOBILE} {
    margin-bottom: 90px;
  }
`;

const AboutCopy = styled.div`
  flex: 1;

  @media ${mq.MOBILE} {
    margin-left: 60px;
  }
`;

const IntroCopy = styled.div`
  margin-bottom: 30px;
`;

const SummaryCopy = styled.div`
  margin-bottom: 45px;
`;

const QualificationHeading = styled.div`
  margin-bottom: 30px;
`;

const QualificationList = styled.div`
  margin-bottom: 45px;
`;

const Biography = styled.div`
  flex: 1;
`;

const BiographyCopy = styled.div`
  margin-bottom: 30px;
`;

const EmptyColumn = styled.div`
  flex: 1;
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
