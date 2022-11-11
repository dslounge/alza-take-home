import React from "react";
import styled from "styled-components/native";

const Component = styled.View`
  background-color: white;
  margin: 2px;
  padding: 8px;
  height: 75px;
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text``;
interface ListFooterProps {
  isLoading: boolean;
  numItems: number;
}

export const ListFooter = ({ numItems, isLoading }: ListFooterProps) => {
  const footerLabel = `${numItems} transactions`;

  return (
    <Component>
      <Label>{footerLabel}</Label>
    </Component>
  );
};