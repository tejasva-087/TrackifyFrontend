import { useEffect } from "react";

import Button from "./ui/Button";
import Logo from "./ui/logo";
import UserMenu from "./UserMenu";

import { Plus, Moon, Sun } from "@phosphor-icons/react";

function Navigation({ theme, setTheme, className }) {
  const changeTheme = function () {
    document.body.classList.toggle("dark-mode");
    const currentTheme = document.body.classList.contains("dark-mode")
      ? "dark"
      : "light";
    localStorage.setItem("theme", currentTheme);
    setTheme(currentTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <header className={`nav-bar ${className}`}>
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
        <UserMenu userName={"Tejasva Khandelwal"} />
      </div>
    </header>
  );
}

export default Navigation;
