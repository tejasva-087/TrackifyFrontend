import { ArrowDownRight, ArrowUpLeft, X, Check } from "@phosphor-icons/react";

function VisualIcons({ type }) {
  return (
    <div>
      {type === "incomming" && (
        <ArrowDownRight
          className="visual-icon visual-icon--incomming icon--big icon--bold"
          weight="bold"
        />
      )}
      {type === "outgoing" && (
        <ArrowUpLeft
          className="visual-icon visual-icon--outgoing icon--big"
          weight="bold"
        />
      )}
      {type === "cancel" && (
        <X
          className="visual-icon visual-icon--cancel icon--big"
          weight="bold"
        />
      )}
      {type === "check" && (
        <Check
          className="visual-icon visual-icon--check icon--big"
          weight="bold"
        />
      )}
    </div>
  );
}

export default VisualIcons;
