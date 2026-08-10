import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { mq } from "../../utils/styleUtils";
import { Button } from "../Button/";
import { Section } from "../Section/";
import { Wrapper } from "../Wrapper/";
import { Image } from "../image";

export const HomeAbout = () => (
  <Section top={false}>
    <HomeAboutWrapper>
      <ImageColumn>
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
      </ImageColumn>
      <CopyColumn>
        <CopyBlock>
          <P>
            Hi! My name’s Christine Wilkinson and I’m the mother of two
            wonderful boys, Brody, 12, and Connor, 9 years old. I
            have 13+ years of experience as an Educational Assistant working
            with elementary special needs children at the Burnaby School Board.
          </P>
        </CopyBlock>
        <ButtonWrapper>
          <Button as={Link} kind="secondary" to="/about">
            Read more about me
          </Button>
        </ButtonWrapper>
      </CopyColumn>
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

const ImageColumn = styled.div`
  flex: 1;
  margin-bottom: 30px;
`;

const CopyColumn = styled.div`
  flex: 1;
`;

const CopyBlock = styled.div`
  margin-bottom: 45px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media ${mq.MOBILE} {
    justify-content: flex-start;
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
