import React from "react";
import { Box } from "rebass";
import styled from "styled-components";

import { colors } from "../../utils/styleUtils";
import { Button } from "../Button/";
import { Wrapper } from "../Wrapper/";

export const Form = () => (
  <form id="get-in-touch-form">
    <Background>
      <Wrapper>
        <Box mb="22px">
          <Heading>Get in touch!</Heading>
          <Subheading>
            We look forward to welcoming you to our daycare and caring for your
            child.
          </Subheading>
        </Box>
        <Box mb="15px">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required={true}
            type="text"
          />
        </Box>
        <Box mb="15px">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Your email"
            required={true}
            type="email"
          />
        </Box>
        <Box mb="30px">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your message"
            required={true}
          />
        </Box>
        <Button kind="primary" type="submit" width="100%">
          Send message
        </Button>
      </Wrapper>
    </Background>
  </form>
);

const Background = styled.div`
  background: ${colors.GREEN};
  padding: 30px 0;
`;

const Heading = styled.h3`
  color: ${colors.WHITE};
  font-size: 24px;
  margin-bottom: 6px;
  text-align: center;
`;

const Subheading = styled.p`
  color: white;
  font-weight: 500;
  text-align: center;
`;

const Label = styled.label`
  display: block;
  color: white;
  font-family: "Gilroy";
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
`;
const Input = styled.input`
  height: 45px;
  border-radius: 3px;
  padding: 0 15px;
  width: 100%;
`;
const Textarea = styled.textarea`
  border-radius: 3px;
  border: none;
  font-size: 16px;
  min-height: 90px;
  padding: 12px 15px;
  width: 100%;
`;
