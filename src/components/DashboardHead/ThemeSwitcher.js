import React from "react";

export default function ThemeSwitcher({ theme, toggleTheme }) {
  return (
    <div className="dashboard__toggle-wrapper">
      <p className="dashboard__toggle-name">Dark Mode</p>
      <button type="button" name="toggle-button" className="toggle-button" onClick={toggleTheme}>
        <div
          className={
            theme === "light-theme"
              ? "toggle-slider"
              : "toggle-slider toggle-slider--dark"
          }
        />
      </button>
    </div>
  );
}
