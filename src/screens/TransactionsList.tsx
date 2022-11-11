import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { getTransactions } from "../data/getTransactions";
import { TransactionItem } from "../components/TransactionItem";
import { ListFooter } from "../components/ListFooter";

const Component = styled.View`
  flex: 1;
  padding: 8px;
`;

const List = styled.FlatList`
  flex: 1;
`;

const Header = styled.Text`
  font-size: 20px;
`;

export const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const loader = async () => {
      console.log("weeooo");
      const data = await getTransactions();
      console.log("--got transactions--");
      console.log(data);
      const { hasMore, transactions } = data;
      setTransactions(transactions);
    };
    loader();
  }, []);

  const isLoading = false;
  const numItems = transactions.length;

  const renderItem = ({ item, index }) => {
    console.log(item);
    return <TransactionItem transaction={item} />;
  };

  const keyExtractor = (item) => {
    return item.id;
  };

  const onEndReached = () => {
    console.log("--onEndReached--");
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
      />
    </Component>
  );
};
