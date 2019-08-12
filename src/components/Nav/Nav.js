import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

export const Nav = ({ isOpen }) => (
  <StyledNav>
    <NavList>
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
        <NavLink to="/gallery">Gallery</NavLink>
      </NavListItem>
    </NavList>
  </StyledNav>
);

Nav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

const StyledNav = styled.nav``;

const NavList = styled.ul``;

const NavListItem = styled.li``;

const NavLink = styled(Link)``;
