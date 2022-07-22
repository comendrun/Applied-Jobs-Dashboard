import React, { useState } from "react";
import TopCard from "./components/TopCard";

import jsonData from "./Data/data.json";
import { nanoid } from "nanoid";
import "./app.css";
import { BrowserRouter, Link, NavLink, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Create from "./Pages/Create";

function App() {
  const [query, setQuery] = useState("weekly");

  function periodClickHandler(event) {
    const name = event.target.name;
    setQuery(`${name}`);
  }

  return (
    <div className="app=container flex flex-col min-w-[100vw] min-h-[100vh] ">
      <div className="App ">
        <TopCard onClick={periodClickHandler} query={query} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs/:id" />
            <Route path="/create" element={<Create />} />
            <Route path="/search" />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
