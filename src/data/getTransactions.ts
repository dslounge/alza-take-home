const endpoint = "https://assignment.alza.app/transactions";

export const getTransactions = async () => {
  console.log("--getTransactions--");
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error("response not ok");
  } catch (e) {
    console.log("there was an error loading data");
    console.log(e);
  }
};
