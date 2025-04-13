import Button from "./ui/Button";

import { Check } from "@phosphor-icons/react";

function LoansRepayments({ className, amount, name }) {
  return (
    <div className={`${className} loans-repayments `}>
      <p className="text-primary">
        {name} owes you{" "}
        {amount < 0 ? (
          <span className="loans-repayments--red font-bold">₹{amount}</span>
        ) : (
          <span className="loans-repayments--green font-bold">₹{amount}</span>
        )}
      </p>
      <Button className={"btn--outline flex-center"}>
        <Check className="icon--sml" weight="light" />
      </Button>
    </div>
  );
}

export default LoansRepayments;
