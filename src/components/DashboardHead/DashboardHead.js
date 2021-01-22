import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function DashboardHead({ theme, toggleTheme }) {
  return (
    <div className="dashboard__head">
      <h1 className="dashboard__head-title">Social Media Dashboard</h1>
      <p className="dashboard__head-counter">Total Followers: 23,004</p>
      <div className="dashboard__head-line" />
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
