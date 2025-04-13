import Button from "./ui/Button";

import { X } from "@phosphor-icons/react";

function AutoPay({ className, amount, days, service }) {
  return (
    <dic className={`${className} auto-pay`}>
      <div>
        <p className="text-primary ">₹{amount}</p>
        <p className="text-tertiary">{service}</p>
      </div>
      <p className="text-tertiary font-light">Every {days} days</p>
      <Button className="btn--outline flex-center">
        <X className="icon--sml" weight="light" />
      </Button>
    </dic>
  );
}

export default AutoPay;
