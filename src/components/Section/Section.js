import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 0;
  ${({ top }) => top === false && "padding-top: 0;"};
`;
