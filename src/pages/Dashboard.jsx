import Navigation from "../components/Navigation";
import Box from "../components/ui/Box";
import Button from "../components/ui/Button";
import Stats from "../components/Stats";
import Date from "../components/Date";
import Transaction from "../components/Transaction";
import LineGraph from "../components/LineGraph";

import {
  CaretLeft,
  CaretRight,
  Wallet,
  MoneyWavy,
} from "@phosphor-icons/react";

function Dashboard({ theme, setTheme }) {
  return (
    <>
      <Navigation theme={theme} setTheme={setTheme} className="dashboard-nav" />

      <div className="dashboard">
        <Stats
          label="current balance"
          amount={1200}
          icon={<Wallet className="icon--big" weight="light" />}
          className="dashboard-balance-stats"
        ></Stats>

        <Stats
          label="Total spending"
          amount={1237}
          icon={<MoneyWavy className="icon--big" weight="light" />}
          className="dashboard-spending-stats"
        ></Stats>
        <Box className="dashboard-transactions">
          <div className="flex-center gap--mid">
            <Button className="btn--primary flex-center">
              <CaretLeft className="icon--big" weight="light" />
            </Button>
            <Date date={24} month="Apr"></Date>
            <Date date={24} month="Apr"></Date>
            <Date date={24} month="Apr"></Date>
            <Date date={24} month="Apr" className="date-box--primary"></Date>
            <Button className="btn--primary flex-center">
              <CaretRight className="icon--big" weight="light" />
            </Button>
          </div>
          <div className="transaction-box-container">
            <Transaction type="incoming" />
            <Transaction type="outgoing" />
            <Transaction type="outgoing" />
            <Transaction type="outgoing" />
          </div>
        </Box>
        <Box className="dashboard-graph">
          <LineGraph
            date={[
              "12/01/23",
              "12/02/23",
              "12/03/23",
              "12/04/23",
              "12/05/23",
              "12/06/23",
              "12/07/23",
              "12/08/23",
              "12/09/23",
              "12/10/23",
            ]}
            amount={[1, 5, 2, 4, 2]}
          />
        </Box>

        <Box className="dashboard-auto-pay">AUTO PAY</Box>
        <Box className="dashboard-loans-repayments">Loans and repayments</Box>
      </div>
    </>
  );
}

export default Dashboard;
