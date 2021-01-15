import React from 'react'
import ThemeSwitcher from "./ThemeSwitcher";

export default function DashboardHead({theme, handleTheme}) {
    return (
      <div className={theme ? "dashboard__head" : "dashboard__head dashboard__head--dark"}>
        <h1 className="dashboard__head-title">Social Media Dashboard</h1>
        <p className="dashboard__head-counter">Total Followers: 23,004</p>
        <div className="dashboard__head-line"/>
        <ThemeSwitcher theme={theme} handleTheme={handleTheme} />
      </div>
    );
}
