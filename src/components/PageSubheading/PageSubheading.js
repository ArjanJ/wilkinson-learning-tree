import styled from "styled-components";

import { mq } from "../../utils/styleUtils";

export const PageSubheading = styled.h2`
  font-size: 18px;
  margin-bottom: 22px;

  @media ${mq.MOBILE} {
    font-size: 20px;
  }
`;
