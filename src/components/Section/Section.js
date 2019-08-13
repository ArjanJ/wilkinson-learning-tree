import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 0;
  ${({ bottom }) => bottom === false && "padding-bottom: 0;"};
  ${({ top }) => top === false && "padding-top: 0;"};
`;
