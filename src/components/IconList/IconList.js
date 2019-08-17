import React from "react";
import styled from "styled-components";

import { mq } from "../../utils/styleUtils";

export const IconList = ({ data = [] }) => (
  <List>
    {data.map(({ icon, text }) => (
      <ListItem key={text}>
        <IconWrapper>{icon}</IconWrapper>
        <ItemText>{text}</ItemText>
      </ListItem>
    ))}
  </List>
);

const List = styled.ul`
  list-style-type: none;

  @media ${mq.MOBILE} {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }
`;

const ListItem = styled.li`
  align-items: center;
  display: flex;
  margin-bottom: 45px;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${mq.MOBILE} {
    margin-left: 45px;
    width: calc(50% - 45px);

    &:nth-child(odd) {
      margin-left: 0;
    }

    &:last-child {
      margin-bottom: 45px;
    }
  }
`;

const IconWrapper = styled.div``;

const ItemText = styled.p`
  font-size: 15px;
  margin: 0 0 0 22px;

  @media ${mq.MOBILE} {
    font-size: 16px;
    margin: 0 0 0 18px;
  }
`;
