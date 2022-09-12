import React from "react";
import { NavLink } from "react-router-dom";
import comendrun from "../../Assets/images/image-comendrun.jpg";
import SearchBar from "../SearchBar/SearchBar";

export default function TopCard() {
  return (
    <div className="top-card ease-in duration-200">
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
            <NavLink to="/applied-jobs-dashboard/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/applied-jobs-dashboard/create">Create</NavLink>
          </li>
          <li>
            <SearchBar />
          </li>
        </ul>
      </div>
    </div>
  );
}
