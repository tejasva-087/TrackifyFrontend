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
      <Navigation theme={theme} setTheme={setTheme} className="navigation" />

      <Stats
        label="current balance"
        amount={1200}
        icon={<Wallet className="icon--big" weight="light" />}
        className="current-balance"
      ></Stats>
      <Stats
        label="Total spending"
        amount={1237}
        icon={<MoneyWavy className="icon--big" weight="light" />}
        className="total-spending"
      ></Stats>

      <Box className="flex-center gap--mid flex-column transactions">
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
        <div className="transaction-box-container width-full">
          <Transaction type="incoming" />
          <Transaction type="outgoing" />
          <Transaction type="outgoing" />
          <Transaction type="outgoing" />
        </div>
      </Box>

      <Box className="width-600 height-full spending-graph">
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
            "12/11/23",
            "12/12/23",
            "12/13/23",
            "12/14/23",
            "12/15/23",
            "12/16/23",
            "12/17/23",
            "12/18/23",
            "12/19/23",
            "12/20/23",
          ]}
          amount={[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 16, 17, 18, 19,
            20,
          ]}
        />
      </Box>
      <Box className="auto-pay">AUTO PAY</Box>
      <Box className="loans-repayments">Loans and repayments</Box>
    </>
  );
}

export default Dashboard;
