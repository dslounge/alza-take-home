import React from "react";
import styled from "styled-components/native";
import { Transaction } from "../types";

const Component = styled.View`
  padding: 8px 0px;
`;

const Title = styled.Text``;
const Description = styled.Text``;
const Date = styled.Text``;
const Amount = styled.Text``;

interface TransactionItemProps {
  transaction: Transaction;
}

export const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const { title, tags, id, description, date, currency, amount } = transaction;

  return (
    <Component>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Amount>{amount}</Amount>
      <Date>{date}</Date>
    </Component>
  );
};
