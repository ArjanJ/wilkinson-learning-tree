import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

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
    </HeaderWrapper>
  </header>
);

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 15px;
`;

const HeaderHamburgerButton = styled.button`
  align-items: center;
  background: none;
  display: flex;

  span {
    margin-right: 7px;
  }
`;

const HeaderLogoLink = styled(Link)`
  display: flex;
`;
