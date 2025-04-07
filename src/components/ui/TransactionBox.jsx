import VisualIcons from "./VisualIcons";
import Button from "./Button";
import { DotsThree, PencilSimple, Trash } from "@phosphor-icons/react";

function TransactionBox({ type }) {
  return (
    <div className="transaction-box width-full">
      <VisualIcons type={type} />

      <p className="text-primary">₹1233</p>

      <div className="transaction-box-menu--btn">
        <DotsThree className="icon--big" />

        <menu className="transaction-box-menu flex-center flex-column gap--sml">
          <Button color="normal" className="btn--normal--combined width-full">
            <PencilSimple className="icon--big" weight="light" />
            <p className="text-secondary">Edit</p>
          </Button>
          <Button color="normal" className="btn--normal--combined width-full">
            <Trash className="icon--big" weight="light" />
            <p className="text-secondary">Delete</p>
          </Button>
        </menu>
      </div>

      <p className="transaction-box-description text-tertiary">
        Food with friends
      </p>
      <p className="text-tertiary font-light">11:30 PM</p>
    </div>
  );
}

export default TransactionBox;
