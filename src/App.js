import "./reset.css";
import "./App.scss";
import React, { useState, useEffect } from "react";
import OverviewList from "./components/OverviewList/OverviewList";
import MediaList from "./components/MediaList/MediaList";
import DashboardHead from "./components/DashboardHead/DashboardHead";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light-theme"
  );

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className="dashboard"
    >
      <DashboardHead theme={theme} toggleTheme={toggleTheme}/>
      <MediaList />
      <OverviewList />
    </div>
  );
}

export default App;
