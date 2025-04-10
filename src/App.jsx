import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  return (
    <>
      <Dashboard theme={theme} setTheme={setTheme} />
    </>
  );
}

export default App;
