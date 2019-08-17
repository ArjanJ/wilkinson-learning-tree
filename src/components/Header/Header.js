import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { colors, easing, mq } from "../../utils/styleUtils";
import { Logo } from "../Logo/";
import { Nav, NavHamburger } from "../Nav/";
import { Toggle } from "../Toggle/";

export const Header = () => (
  <header>
    <HeaderWrapper>
      <HeaderLogoLink to="/">
        <Logo />
      </HeaderLogoLink>
      <Toggle>
        {({ isOpen, toggle }) => (
          <>
            <HeaderHamburgerButton onClick={toggle} type="button">
              <span>Menu</span>
              <NavHamburger />
            </HeaderHamburgerButton>
            <Nav isOpen={isOpen} toggle={toggle} />
          </>
        )}
      </Toggle>
      <HeaderContact>
        <a href="tel:6045372396">Call: (604) 537-2396</a>
      </HeaderContact>
    </HeaderWrapper>
  </header>
);

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 15px;

  @media ${mq.MOBILE} {
    background: white;
    height: 75px;
    padding: 0 30px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }
`;

const HeaderHamburgerButton = styled.button`
  align-items: center;
  background: none;
  display: flex;

  span {
    margin-right: 7px;
  }

  @media ${mq.MOBILE} {
    display: none;
  }
`;

const HeaderLogoLink = styled(Link)`
  display: flex;
`;

const HeaderContact = styled.div`
  display: none;

  @media ${mq.MOBILE} {
    display: block;

    a {
      font-weight: 500;
      text-decoration: none;

      transition: color 0.3s ${easing.OUT};

      &:hover {
        color: ${colors.BLUE};
      }
    }
  }
`;
