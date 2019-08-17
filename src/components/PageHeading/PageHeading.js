import styled from "styled-components";

import { colors, mq } from "../../utils/styleUtils";

export const PageHeading = styled.h1`
  color: ${colors.BLUE};
  line-height: 1.25;
  margin: 0 auto 22px;

  @media ${mq.MOBILE} {
    font-size: 36px;
    margin: 0 auto 75px;
  }

  ${({ textAlign }) => (textAlign ? `text-align: ${textAlign}` : null)};
`;
