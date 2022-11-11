import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native";
import { TransactionList } from "./src/screens/TransactionsList";

const AppComponent = styled.View`
  flex: 1;
  background-color: gray;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export default function App() {
  return (
    <AppComponent>
      <StatusBar style="auto" />
      <SafeArea>
        <TransactionList />
      </SafeArea>
    </AppComponent>
  );
}
