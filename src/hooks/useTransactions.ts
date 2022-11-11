import { useEffect, useState } from "react";
import { getTransactions } from "../data/getTransactions";

export const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loader = async () => {
      setIsLoading(true);
      const data = await getTransactions();
      const { hasMore, transactions } = data;
      setTransactions(transactions);
      setHasMore(hasMore);
      setIsLoading(false);
    };
    loader();
  }, []);

  const loadMore = async () => {
    const lastTransaction = transactions[transactions.length - 1];
    const { id } = lastTransaction;

    setIsLoading(true);
    const data = await getTransactions(id);
    const { hasMore, transactions: newTransactions } = data;
    const updatedTransactions = [...transactions, ...newTransactions];

    setTransactions(updatedTransactions);
    setIsLoading(false);
    setHasMore(hasMore);
  };

  return {
    transactions,
    isLoading,
    hasMore,
    loadMore,
  };
};
