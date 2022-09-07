import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// styles
import "./SearchBar.css";
// import { randomStyle } from "../styles";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  //   const [style, setStyle] = useState(null);

  const navigate = useNavigate();

  //   useEffect(() => {
  //     setStyle(randomStyle().card);
  //   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/applied-jobs-dashboard/search?q=${searchTerm}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="search">Search:</label> */}
        <input
          type="text"
          id="search"
          placeholder="Search ..."
          onChange={(e) => setSearchTerm(e.target.value)}
          required
          className="p-2 rounded text-black border border-white"
        />
      </form>
    </div>
  );
}
