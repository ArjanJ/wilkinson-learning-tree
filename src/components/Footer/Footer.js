import { Link } from "gatsby";
import React from "react";
import { Box } from "rebass";
import styled from "styled-components";

import { colors, easing, mq } from "../../utils/styleUtils";
import { Logo } from "../Logo/";
import { Section } from "../Section/";
import { Wrapper } from "../Wrapper/";

export const Footer = () => (
  <Box pt={["60px", "90px"]}>
    <Section as="footer">
      <Wrapper>
        <Box mb="37px">
          <Logo />
        </Box>
        <FooterNav>
          <FooterNavLink hideDesktop={true} to="#">
            Contact Us
          </FooterNavLink>
          <Box>
            <FooterText href="tel:6045372396">(604) 537-2396</FooterText>
            <FooterText href="mailto:christine@wilkinsonlearningtree.com">
              christine@wilkinsonlearningtree.com
            </FooterText>
            <FooterText href="">
              10172 244th Street Maple Ridge, BC V2W 0H5
            </FooterText>
          </Box>
          <FooterNavLink to="/services">Our Services</FooterNavLink>
          <FooterNavLink to="/about">About Us</FooterNavLink>
          <FooterNavLink to="/register">Register Now</FooterNavLink>
          <FooterNavLink to="/photos">Photos</FooterNavLink>
        </FooterNav>
      </Wrapper>
    </Section>
    <FooterBottom>
      <Wrapper>© Wilkinson Learning Tree {new Date().getFullYear()}</Wrapper>
    </FooterBottom>
  </Box>
);

const FooterNav = styled.nav`
  @media ${mq.MOBILE} {
    display: flex;
    justify-content: space-between;
  }
`;

const FooterNavLink = styled(Link)`
  display: block;
  font-family: "Gilroy", sans-serif;
  font-weight: 700;
  margin-bottom: 22px;
  text-decoration: none;
  transition: color 0.3s ${easing.OUT};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: ${colors.BLUE};
  }

  @media ${mq.MOBILE} {
    ${({ hideDesktop }) => (hideDesktop === true ? "display: none" : null)};
  }
`;

const FooterText = styled.a`
  display: block;
  margin-bottom: 12px;
  text-decoration: none;

  &:last-child {
    margin-bottom: 15px;
  }
`;

const FooterBottom = styled.div`
  background: ${colors.LIGHT_GREY};
  padding: 15px 0;
  text-align: center;
`;
