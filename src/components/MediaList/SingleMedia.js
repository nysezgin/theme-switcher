import React from "react";
import upIcon from "../images/icon-up.svg";
import downIcon from "../images/icon-down.svg";

export default function SingleMedia({
  icon,
  name,
  top,
  count,
  type,
  increase,
  today,
}) {
  return (
    <div className="media">
      <div className={top}/>
      <p className="media__name">
        <img className="media__icon" src={icon} alt="" />
        {name}
      </p>
      <p className="media__count">
        {count}
        <span className="media__type">{type}</span>
      </p>

      <p
        className={
          increase
            ? "media__today media__today--up"
            : "media__today media__today--down"
        }
      >
        <img src={increase ? upIcon : downIcon} alt="" />
        {today} Today
      </p>
    </div>
  );
}
