import { LineSegments } from "@phosphor-icons/react";

function logo({ className }) {
  return (
    <div className={`logo ${className} flex items-center gap-2`}>
      <LineSegments
        className="w-14 h-14 p-3 bg-[var(--color-primary)] rounded-xl text-[var(--color-white-primary)]"
        weight="light"
      />
      <h3 className="text-3xl font-bold">Trackify</h3>
    </div>
  );
}

export default logo;
