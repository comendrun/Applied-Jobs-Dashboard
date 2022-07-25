import React from "react";
import { NavLink } from "react-router-dom";
import comendrun from "../images/image-comendrun.jpg";
import SearchBar from "./SearchBar";

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
        <ul className="Pale-Blue desktop:gap-2">
          <li>
            <NavLink to="/Applied-jobs-Dashboard">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Applied-jobs-Dashboard/create">Create</NavLink>
          </li>
          <li>
            <SearchBar />
          </li>
        </ul>
      </div>
    </div>
  );
}
