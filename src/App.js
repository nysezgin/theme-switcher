import "./reset.css";
import "./App.scss";
import React, { useState } from "react";
import OverviewList from "./components/OverviewList/OverviewList";
import MediaList from "./components/MediaList/MediaList";
import DashboardHead from "./components/DashboardHead/DashboardHead";

function App() {
  const [light, setLight] = useState(true);
  const handleTheme = () => {
    setLight(!light);
  };
  return (
    <div
      className={
        light ? "dashboard" : "dashboard dashboard--dark"
      }
    >
      <DashboardHead theme={light} handleTheme={handleTheme}/>
      <MediaList theme={light} />
      <OverviewList theme={light} />
    </div>
  );
}

export default App;
