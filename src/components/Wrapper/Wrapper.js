import styled from "styled-components";

import { mq } from "../../utils/styleUtils";

export const Wrapper = styled.div`
  padding: 0 30px;

  @media ${mq.MOBILE} {
    margin: 0 auto;
    max-width: 1140px;
  }
`;
