import Navigation from "./components/Navigation";
import Box from "./components/ui/Box";
import Button from "./components/ui/Button";
import Dates from "./components/ui/DateBox";
import StatsBox from "./components/ui/StatBox";
import LineGraph from "./components/ui/LineGraph";

import {
  Wallet,
  MoneyWavy,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import TransactionBox from "./components/ui/TransactionBox";

function App() {
  return (
    <>
      <Navigation />
      <StatsBox
        label="current balance"
        amount={1200}
        icon={<Wallet className="icon--big" weight="light" />}
      ></StatsBox>
      <StatsBox
        label="Totel spending"
        amount={1237}
        icon={<MoneyWavy className="icon--big" weight="light" />}
      ></StatsBox>
      <Box className="flex-center gap--mid flex-column">
        <div className="flex-center gap--mid">
          <Button className="btn--primary flex-center">
            <CaretLeft className="icon--big" weight="light" />
          </Button>
          <Dates date={24} month="Apr"></Dates>
          <Dates date={24} month="Apr"></Dates>
          <Dates date={24} month="Apr"></Dates>
          <Dates date={24} month="Apr" className="date-box--primary"></Dates>
          <Button className="btn--primary flex-center">
            <CaretRight className="icon--big" weight="light" />
          </Button>
        </div>
        <div className="transaction-box-container width-full">
          <TransactionBox type="incomming" />
          <TransactionBox type="outgoing" />
          <TransactionBox type="outgoing" />
          <TransactionBox type="outgoing" />
        </div>
      </Box>
      <Box>
        <LineGraph />
      </Box>
    </>
  );
}

export default App;
