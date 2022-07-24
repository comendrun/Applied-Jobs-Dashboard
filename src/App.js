import React, { useState } from "react";
import TopCard from "./components/TopCard";

import { nanoid } from "nanoid";
import "./app.css";
import { BrowserRouter, Link, NavLink, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Job from "./Pages/Job";
import EditPage from "./Pages/EditPage";

function App() {
  const [query, setQuery] = useState("weekly");

  function periodClickHandler(event) {
    const name = event.target.name;
    setQuery(`${name}`);
  }

  return (
    <div className="app=container flex flex-col min-w-[100vw] min-h-[100vh] ">
      <div className="App ">
        <BrowserRouter>
          <TopCard onClick={periodClickHandler} query={query} />
          <Routes>
            <Route path="/Applied-Jobs-Dashboard/" element={<Home />} />
            <Route path="/Applied-Jobs-Dashboard/jobs/:id" element={<Job />} />
            <Route
              path="/Applied-Jobs-Dashboard/jobs/edit/:id"
              element={<EditPage />}
            />

            <Route path="/Applied-Jobs-Dashboard/create" element={<Create />} />
            <Route path="/Applied-Jobs-Dashboard/search" />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
