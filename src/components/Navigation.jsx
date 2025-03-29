import { useState } from "react";

import Button from "./ui/Button";
import Logo from "./ui/logo";

import { Plus, Moon, CaretDown, Sun } from "@phosphor-icons/react";

function Navigation() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const changeTheme = function () {
    document.body.classList.toggle("dark-mode");

    // Storimg the current theme in local storage
    const currentTheme = document.body.classList.contains("dark-mode")
      ? "dark"
      : "light";
    localStorage.setItem("theme", currentTheme);
    setTheme(currentTheme);
  };

  return (
    <header className="nav-bar">
      {/* Logo */}
      <Logo link="#" />

      <div className="flex-center gap--mid">
        {/* options */}
        <div className="flex-center gap--sml">
          <Button color="primary" className="flex-center">
            <Plus className="icon--big" weight="light" />
          </Button>
          <Button color="primary" className="flex-center" onClick={changeTheme}>
            {theme === "dark" ? (
              <Moon className="icon--big" weight="light" />
            ) : (
              <Sun className="icon--big" weight="light" />
            )}
          </Button>
        </div>

        {/* user menu */}
        <div className="user-menu flex-center gap--sml">
          <img
            src="https://api.dicebear.com/9.x/fun-emoji/svg?seed=16761343"
            alt="user-profile-img"
            className="user-img"
          />
          <CaretDown weight="light" className="icon--sml" />
        </div>
      </div>
    </header>
  );
}

export default Navigation;
