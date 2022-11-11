import React from "react";
import styled from "styled-components/native";
import { Transaction } from "../types";
import { AMOUNT_BACKGROUND, ITEM_BACKGROUND, WHITE } from "../colors";

const Component = styled.View`
  padding: 16px;
  background-color: ${ITEM_BACKGROUND};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.View``;

const Title = styled.Text`
  color: ${WHITE};
  font-weight: bold;
  font-size: 14px;
`;
const Description = styled.Text`
  color: ${WHITE};
  font-size: 10px;
`;
const Date = styled.Text`
  color: ${WHITE};
`;

const AmountContainer = styled.View`
  padding: 4px;
  background-color: ${AMOUNT_BACKGROUND};
  border-radius: 4px;
`;
const Amount = styled.Text`
  color: ${WHITE};
  font-weight: bold;
`;

interface TransactionItemProps {
  transaction: Transaction;
}

export const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const { title, tags, id, description, date, currency, amount } = transaction;

  // all the transactions seem to be USD right now
  const dollarAmount = amount / 100;
  const amountLabel = `$${dollarAmount} ${currency}`;

  return (
    <Component>
      <Content>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
      <AmountContainer>
        <Amount>{amountLabel}</Amount>
      </AmountContainer>
    </Component>
  );
};
