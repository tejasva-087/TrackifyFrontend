import React from "react";

import Logo from "./components/ui/logo";
import Button from "./components/ui/Button";

import { Plus, Sun } from "@phosphor-icons/react";
import UserMenu from "./components/UserMenu";

function App() {
  return (
    <header className="flex justify-between items-center p-8 border-b border-[var(--color-white-tertiary)]">
      <Logo />
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Button>
            <Plus
              className=" bg-[var(--color-primary)] text-[var(--color-white-primary)] rounded-xl p-3 w-14 h-14"
              weight="light"
            />
          </Button>
          <Button onClick={() => alert("Theme changed")} disabled="disabled">
            <Sun
              className=" bg-[var(--color-primary)] text-[var(--color-white-primary)] rounded-xl p-3 w-14 h-14"
              weight="light"
            />
          </Button>
        </div>
        <UserMenu userImageSeed={15313} />
      </div>
    </header>
  );
}

export default App;
