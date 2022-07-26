import React, { useState } from "react";
import TopCard from "./components/TopCard";

import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Job from "./Pages/Job";
import EditPage from "./Pages/EditPage";
import Search from "./Pages/Search/Search";
import Footer from "./components/Footer";

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
            <Route path="/applied-jobs-dashboard/" element={<Home />} />

            <Route path="/applied-jobs-dashboard/jobs/:id" element={<Job />} />

            <Route
              path="/applied-jobs-dashboard/jobs/edit/:id"
              element={<EditPage />}
            />

            <Route path="/applied-jobs-dashboard/create" element={<Create />} />

            <Route path="/applied-jobs-dashboard/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </div>
        <Footer />
    </div>
  );
}

export default App;
