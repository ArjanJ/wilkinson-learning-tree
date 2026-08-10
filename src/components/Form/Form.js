import { darken, lighten } from "polished";
import React from "react";
import styled from "styled-components";

import { colors, easing, mq } from "../../utils/styleUtils";
import { Button } from "../Button/";
import { Wrapper } from "../Wrapper/";

export const Form = () => (
  <form
    name="Website Lead"
    method="post"
    netlify-honeypot="bot-field"
    data-netlify="true"
    id="get-in-touch-form"
  >
    <input type="hidden" name="bot-field" />
    <Background>
      <FormWrapper>
        <FormIntro>
          <Heading>Get in touch!</Heading>
          <IntroCopy>
            <Subheading>
              We look forward to welcoming you to our daycare and caring for
              your child. We’ll be in touch with you as soon as possible, thank
              you.
            </Subheading>
          </IntroCopy>
          <FormDesktopMoreCopy>
            <Subheading>
              If you prefer to contact us directly, feel free to call{" "}
              <strong>
                <a href="tel:6045372396">(604) 537-2396</a>
              </strong>{" "}
              or email{" "}
              <strong>
                <a href="mailto:christine@wilkinsonlearningtree.com">
                  christine@wilkinsonlearningtree.com
                </a>
              </strong>
            </Subheading>
          </FormDesktopMoreCopy>
        </FormIntro>
        <FormFields>
          <FormField>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              required={true}
              type="text"
            />
          </FormField>
          <FormField>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Your email"
              required={true}
              type="email"
            />
          </FormField>
          <FormField>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              inputmode="numeric"
              name="phone"
              pattern="[0-9]*"
              placeholder="Your phone number"
              required={true}
              type="text"
            />
          </FormField>
          <ChildCountField>
            <Legend>Number of children needing daycare</Legend>
            <RadioWrapper>
              <RadioBox>
                <RadioInput
                  id="numberOfChildren1"
                  name="numberOfChildren"
                  value="1"
                  type="radio"
                />
                <RadioLabel htmlFor="numberOfChildren1">1</RadioLabel>
              </RadioBox>
              <RadioBox>
                <RadioInput
                  id="numberOfChildren2"
                  name="numberOfChildren"
                  value="2"
                  type="radio"
                />
                <RadioLabel htmlFor="numberOfChildren2">2</RadioLabel>
              </RadioBox>
              <RadioBox>
                <RadioInput
                  id="numberOfChildren3"
                  name="numberOfChildren"
                  value="3"
                  type="radio"
                />
                <RadioLabel htmlFor="numberOfChildren3">3</RadioLabel>
              </RadioBox>
              <RadioBox>
                <RadioInput
                  id="numberOfChildren4+"
                  name="numberOfChildren"
                  value="4+"
                  type="radio"
                />
                <RadioLabel htmlFor="numberOfChildren4+">4+</RadioLabel>
              </RadioBox>
            </RadioWrapper>
          </ChildCountField>
          <Button kind="primary" type="submit" width="100%">
            Contact us
          </Button>
        </FormFields>
      </FormWrapper>
    </Background>
  </form>
);

const Background = styled.div`
  background: ${colors.ORANGE};
  padding: 45px 0;

  @media ${mq.MOBILE} {
    padding: 90px 0;
  }
`;

const FormWrapper = styled(Wrapper)`
  @media ${mq.MOBILE} {
    display: flex;
  }
`;

const FormIntro = styled.div`
  flex: 1;
  margin-bottom: 22px;
`;

const IntroCopy = styled.div`
  @media ${mq.MOBILE} {
    margin-bottom: 30px;
  }
`;

const FormFields = styled.div`
  flex: 1;

  @media ${mq.MOBILE} {
    margin-left: 90px;
  }
`;

const FormField = styled.div`
  margin-bottom: 22px;

  @media ${mq.MOBILE} {
    margin-bottom: 30px;
  }
`;

const ChildCountField = styled.div`
  margin-bottom: 30px;

  @media ${mq.MOBILE} {
    margin-bottom: 45px;
  }
`;

const Heading = styled.h3`
  color: ${colors.WHITE};
  font-size: 30px;
  margin-bottom: 15px;
  text-align: center;

  @media ${mq.MOBILE} {
    font-size: 36px;
    margin-bottom: 30px;
    text-align: left;
  }
`;

const Subheading = styled.p`
  color: white;
  font-weight: 500;
  text-align: center;

  @media ${mq.MOBILE} {
    font-size: 18px;
    text-align: left;
  }
`;

const Label = styled.label`
  display: block;
  color: white;
  font-family: "Gilroy", sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 6px;
`;

const Legend = styled(Label)``;

const Input = styled.input`
  border: 2px solid white;
  height: 45px;
  border-radius: 3px;
  padding: 0 15px;
  transition: all 0.3s ${easing.OUT};
  width: 100%;

  &:active,
  &:focus {
    border-color: ${colors.BLUE};
  }
`;

const RadioWrapper = styled.div`
  display: flex;
`;

const RadioBox = styled.div`
  flex: 1;

  &:first-child {
    label {
      border-left: none;
      border-bottom-left-radius: 3px;
      border-top-left-radius: 3px;
    }
  }

  &:last-child {
    label {
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
    }
  }
`;

const RadioLabel = styled.label`
  align-items: center;
  background: white;
  border-left: 1px solid ${colors.LIGHT_GREY_2};
  color: ${colors.MID_GREY};
  cursor: pointer;
  display: flex;
  font-weight: 700;
  height: 45px;
  justify-content: center;
  transition: all 0.3s ${easing.OUT};
`;

const RadioInput = styled.input`
  display: none;

  &:checked + label {
    background: ${lighten(0.25, colors.BLUE)};
    color: ${darken(0.1, colors.BLUE)};
  }
`;

const FormDesktopMoreCopy = styled.div`
  display: none;

  @media ${mq.MOBILE} {
    display: block;
  }
`;
