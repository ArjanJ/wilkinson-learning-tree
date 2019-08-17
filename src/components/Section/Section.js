import styled from "styled-components";

import { mq } from "../../utils/styleUtils";

export const Section = styled.section`
  padding: 0 0 60px;
  ${({ bottom }) => bottom === false && "padding-bottom: 0;"};

  @media ${mq.MOBILE} {
    padding: 0 0 90px;
  }
`;
