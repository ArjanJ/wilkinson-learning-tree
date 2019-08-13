import React from "react";
import styled from "styled-components";

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
`;

const ListItem = styled.li`
  align-items: center;
  display: flex;
  margin-bottom: 45px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const IconWrapper = styled.div``;

const ItemText = styled.p`
  font-size: 15px;
  margin: 0 0 0 22px;
`;
