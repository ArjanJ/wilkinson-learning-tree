import { Link } from "gatsby";
import React from "react";
import { Box, Flex } from "rebass";
import styled from "styled-components";

import { Button } from "../Button/";
import { Section } from "../Section/";
import { Wrapper } from "../Wrapper/";

export const HomeAbout = () => (
  <Section top={false}>
    <Wrapper>
      <Box mb="30px">
        <Pic alt="Christine Wilkinson" src="https://picsum.photos/300/300" />
      </Box>
      <Box mb="45px">
        <p>
          My name’s Christine Wilkinson and I’m the mother of two wonderful
          boys, Brody, 7, and Connor, who’s almost 4 years old. I have 13+ years
          of experience as an Education Assistant working with elementary
          special needs children at the Burnaby School Board.
        </p>
      </Box>
      <Flex justifyContent="center">
        <Button as={Link} kind="secondary" to="/about">
          Learn more about me
        </Button>
      </Flex>
    </Wrapper>
  </Section>
);

const Pic = styled.img`
  border-radius: 50%;
  display: block;
  margin: auto;
  height: 90px;
  width: 90px;
`;
