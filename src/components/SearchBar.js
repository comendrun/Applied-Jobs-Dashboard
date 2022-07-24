import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// styles
import "./SearchBar.css";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/Applied-Jobs-Dashboard/search?q=${term}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="search">Search:</label> */}
        <input
          type="text"
          id="search"
          placeholder="Search ..."
          onChange={(e) => setTerm(e.target.value)}
          required
          className="p-2 rounded"
        />
      </form>
    </div>
  );
}
