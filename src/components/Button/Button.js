import { darken, rgba } from "polished";
import React from "react";
import styled, { css } from "styled-components";

import { colors, easing } from "../../utils/styleUtils";

const theme = {
  primary: css`
    background: ${colors.BLUE};
    color: ${colors.WHITE};
    z-index: 0;

    &::before {
      background: ${darken(0.08, colors.BLUE)};
    }
  `,
  secondary: css`
    border: 2px solid ${colors.ORANGE};
    color: ${colors.ORANGE};

    &::before {
      background: ${colors.ORANGE};
    }

    &:hover {
      color: ${colors.WHITE};
    }
  `,
};

export const Button = styled.button`
  align-items: center;
  border-radius: 99px;
  display: inline-flex;
  font-family: "Gilroy";
  font-weight: 700;
  height: 40px;
  justify-content: center;
  min-width: ${({ width }) => (width ? width : 0)};
  overflow: hidden;
  padding: 0 15px;
  position: relative;
  text-decoration: none;

  &:hover {
    &::before {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  &::before {
    border-radius: 50%;
    content: "";
    left: 50%;
    opacity: 0;
    padding: calc(40% + 30px) 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.01);
    transition: all 0.45s ${easing.OUT};
    width: calc(100% + 30px);
    z-index: -1;
  }

  ${({ kind }) => theme[kind]};
`;
