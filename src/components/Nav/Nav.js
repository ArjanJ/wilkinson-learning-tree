import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { colors, easing } from "../../utils/styleUtils";
import { Close } from "../Icons/";

export const Nav = ({ isOpen, toggle }) => (
  <NavContainer isOpen={isOpen}>
    <NavInner>
      <NavList isOpen={isOpen}>
        <NavListItem>
          <NavLink to="/">Home</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to="/services">Our Services</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to="/about">About Us</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to="/register">Register Now</NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink to="/photos">Photos</NavLink>
        </NavListItem>
      </NavList>
      <NavCloseButton onClick={toggle} type="button">
        <Close />
      </NavCloseButton>
    </NavInner>
  </NavContainer>
);

Nav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

const NavContainer = styled.div`
  align-items: center;
  background: white;
  display: flex;
  height: 100%;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  position: fixed;
  right: 0;
  top: 0;
  transition: all 0.6s ${easing.OUT};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  width: 100%;
  z-index: 10;
`;

const NavInner = styled.nav`
  flex: 1;
  padding: 30px;
`;

const NavList = styled.ul`
  list-style-type: none;
  text-align: center;
  transform: ${({ isOpen }) => (isOpen ? "none" : "scale(0.96)")};
  transition: all 0.45s ${easing.OUT};
`;

const NavListItem = styled.li``;

const NavLink = styled(Link)`
  color: ${colors.BLUE};
  display: block;
  font-family: "Gilroy";
  padding: 15px 0;
  font-size: 30px;
  text-decoration: none;
`;

const NavCloseButton = styled.button`
  background: none;
  padding: 0 7px;
  position: absolute;
  right: 15px;
  top: 20px;
`;
