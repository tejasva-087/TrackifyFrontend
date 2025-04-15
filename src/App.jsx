import { useEffect } from "react";

import { colors } from "./config.js";

import Navigation from "./components/Navigation.jsx";
import LineGraph from "./components/LineGraph.jsx";

function App() {
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty("--color-primary", colors.colorPrimary);
    root.style.setProperty("--color-green", colors.colorGreen);
    root.style.setProperty("--color-red", colors.colorRed);
    root.style.setProperty("--color-black-primary", colors.colorBlackPrimary);
    root.style.setProperty(
      "--color-black-secondary",
      colors.colorBlackSecondary
    );
    root.style.setProperty("--color-black-tertiary", colors.colorBlackTertiary);
    root.style.setProperty("--color-white-primary", colors.colorWhitePrimary);
    root.style.setProperty(
      "--color-white-secondary",
      colors.colorWhiteSecondary
    );
    root.style.setProperty("--color-white-tertiary", colors.colorWhiteTertiary);
  }, []);
  return (
    <>
      <Navigation />
      <LineGraph />
    </>
  );
}

export default App;
