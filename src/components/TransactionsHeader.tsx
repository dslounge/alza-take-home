import React from "react";
import styled from "styled-components/native";
import { WHITE } from "../colors";
import logo from "../../assets/alza_logo.png";

const Component = styled.View`
  height: 100px;
  align-items: center;
  flex-direction: row;
`;

const Label = styled.Text`
  color: ${WHITE};
  font-size: 22px;
  font-weight: bold;
`;

const Logo = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 8px;
`;

export const TransactionsHeader = () => {
  return (
    <Component>
      <Logo source={logo} />
      <Label>Your Transactions</Label>
    </Component>
  );
};
