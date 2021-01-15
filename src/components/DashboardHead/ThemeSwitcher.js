import React from "react";

export default function ThemeSwitcher({ theme, handleTheme }) {
  console.log(theme);
  return (
    <div className="dashboard__toggle-wrapper">
      <p className="dashboard__toggle-name">Dark Mode</p>
      <div
        className={theme ? "toggle-button" : "toggle-button toggle-button--dark"}
        onClick={handleTheme}
      >
        <div
          className={
            theme ? "toggle-slider" : "toggle-slider toggle-slider--dark"
          }
        />
      </div>
    </div>
  );
}
