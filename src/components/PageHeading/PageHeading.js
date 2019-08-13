import styled from "styled-components";

import { colors } from "../../utils/styleUtils";

export const PageHeading = styled.h1`
  color: ${colors.BLUE};
  line-height: 1.25;
  margin: 0 auto 22px;

  ${({ textAlign }) => (textAlign ? `text-align: ${textAlign}` : null)};
`;
