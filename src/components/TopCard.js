import React from "react";
import { NavLink } from "react-router-dom";
import comendrun from "../images/image-comendrun.jpg";

export default function TopCard(props) {
  return (
    <div className="top-card">
      <div className="top-card-header">
        <img className="comendrun" alt="" src={comendrun} />
        <div className="top-card-header-user-info">
          <p className="Pale-Blue">Report for</p>
          <h1>Kamran Rouhani</h1>
        </div>
      </div>
      <div className="period ">
        <ul className="Pale-Blue">
          <li>
            <NavLink to="/Applied-jobs-Dashboard">Home</NavLink>

            {/* <button
              className={props.query === "daily" ? "clicked" : ""}
              name="daily"
              onClick={props.onClick}
            >
              Daily
            </button> */}
          </li>
          <li>
            <button
              className={props.query === "weekly" ? "clicked" : ""}
              name="weekly"
              onClick={props.onClick}
            >
              Weekly
            </button>
          </li>
          <li>
            <NavLink to="/Applied-jobs-Dashboard/create">Create</NavLink>
            {/* <button
              className={props.query === "monthly" ? "clicked" : ""}
              name="monthly"
              onClick={props.onClick}
            >
              Monthly
            </button> */}
          </li>
        </ul>
      </div>
    </div>
  );
}
