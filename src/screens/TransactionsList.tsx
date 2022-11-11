import React from "react";
import styled from "styled-components/native";
import { TransactionItem } from "../components/TransactionItem";
import { ListFooter } from "../components/ListFooter";
import { Transaction } from "../types";
import { HEADER_COLOR, SEPARATOR } from "../colors";
import { useTransactions } from "../hooks/useTransactions";

const Component = styled.View`
  flex: 1;
  padding: 8px;
`;

const List = styled.FlatList`
  flex: 1;
`;

const Header = styled.Text`
  font-size: 20px;
  color: ${HEADER_COLOR};
`;

const ItemSeparator = styled.View`
  height: 1px;
  border: 1px solid ${SEPARATOR};
`;

export const TransactionList = () => {
  const { isLoading, hasMore, loadMore, transactions } = useTransactions();

  const numItems = transactions.length;

  const renderItem = ({ item, index }) => {
    return <TransactionItem transaction={item} />;
  };

  const keyExtractor = (item: Transaction) => {
    const { id } = item;
    return id;
  };

  const onEndReached = () => {
    if (hasMore && !isLoading) {
      console.log("end reached, load more data here");
      loadMore();
    }
    console.log("end reached but not loading");
  };

  return (
    <Component>
      <Header>Your Transactions</Header>
      <List
        data={transactions}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={onEndReached}
        ListFooterComponent={
          <ListFooter isLoading={isLoading} numItems={numItems} />
        }
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </Component>
  );
};
