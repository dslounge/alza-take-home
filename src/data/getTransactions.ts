const endpoint = "https://assignment.alza.app/transactions";

export const getTransactions = async (startingAfter = null) => {
  console.log("--getTransactions--");

  let url = startingAfter
    ? `${endpoint}?startingAfter=${startingAfter}`
    : endpoint;

  try {
    const response = await fetch(url);
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
