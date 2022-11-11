import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const Component = styled.View`
  margin: 2px;
  padding: 8px;
  height: 75px;
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text`
  color: white;
`;

interface ListFooterProps {
  isLoading: boolean;
  hasMore: boolean;
  numItems: number;
}

export const ListFooter = ({
  numItems,
  hasMore,
  isLoading,
}: ListFooterProps) => {
  let footerLabel = `${numItems} transactions`;
  if (hasMore) {
    footerLabel = `${footerLabel}. More to load...`;
  }

  return (
    <Component>
      <Label>{footerLabel}</Label>
      {isLoading && <ActivityIndicator />}
    </Component>
  );
};
