import React from "react";
import styled from "styled-components";

import { mq } from "../../utils/styleUtils";
import { Image } from "../image";

export const HomeImageStrip = () => {
  return (
    <Wrapper>
      <Image
        alt="Child playing with toy plane."
        filename="brody-plane-toy-wilkinson-learning-tree.png"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  > div {
    max-height: 180px;
  }

  @media ${mq.MOBILE} {
    display: none;
  }
`;
