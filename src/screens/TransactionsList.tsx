import React from "react";
import styled from "styled-components/native";
import { TransactionItem } from "../components/TransactionItem";
import { ListFooter } from "../components/ListFooter";
import { TransactionsHeader } from "../components/TransactionsHeader";
import { Transaction } from "../types";
import { HEADER_COLOR, SEPARATOR } from "../colors";
import { useTransactions } from "../hooks/useTransactions";

const Component = styled.View`
  flex: 1;
  padding: 16px;
`;

const List = styled.FlatList`
  flex: 1;
`;

const ItemSeparator = styled.View`
  height: 8px;
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
      <List
        data={transactions}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={onEndReached}
        ListFooterComponent={
          <ListFooter
            isLoading={isLoading}
            numItems={numItems}
            hasMore={hasMore}
          />
        }
        ListHeaderComponent={<TransactionsHeader />}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </Component>
  );
};
