import React from 'react'
import upIcon from "../images/icon-up.svg"
import downIcon from "../images/icon-down.svg"

export default function SingleOverview({ id, theme, name, icon, count, increase, percentage}) {
  return (
    <div className={theme ? "overview" : "overview overview--dark"}>
      <p className="overview__name">{name}</p>
      <img className="overview__icon" src={icon} alt="" />
      <p className="overview__count">{count}</p>
      <p
        className={
          increase
            ? "overview__percentage overview__percentage--up"
            : "overview__percentage overview__percentage--down"
        }
      >
        <img src={increase ? upIcon : downIcon} alt="" /> {percentage}%
      </p>
    </div>
  );
}
