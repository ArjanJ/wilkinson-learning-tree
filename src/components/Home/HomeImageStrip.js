import React from "react";
import styled from "styled-components";

export const HomeImageStrip = () => (
  <Wrapper>
    <Img src="https://picsum.photos/200/120" />
    <Img src="https://picsum.photos/235/120" />
    <Img src="https://picsum.photos/210/120" />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Img = styled.img``;
