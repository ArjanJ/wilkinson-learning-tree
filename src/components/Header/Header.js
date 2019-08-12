import React from "react"
import styled from "styled-components"

import { Logo } from "../Logo/Logo"
import { NavHamburger } from "../Nav/NavHamburger"

export const Header = () => (
  <header>
    <HeaderWrapper>
      <Logo />
      <HeaderHamburgerButton type="button">
        <NavHamburger />
      </HeaderHamburgerButton>
    </HeaderWrapper>
  </header>
)

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 15px;
`
const HeaderHamburgerButton = styled.button`
  background: none;
`
