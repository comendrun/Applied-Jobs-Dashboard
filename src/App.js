import React, { useState, useEffect } from "react";

import "./Styles/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Error from "./Pages/Error/Error";
import UserHomePage from "./Pages/Dashboard/UserHomePage/UserHomePage";
import Home from "./Pages/Home/Home";
import Job from "./Pages/Dashboard/Job/Job";

import Search from "./Pages/Dashboard/Search/Search";
import EditPage from "./Pages/Dashboard/EditPage/EditPage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Create from "./Pages/Dashboard/EditPage/EditPage";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/applied-jobs-dashboard" element={<Layout />}>
          <Route index={true} element={<Home />}></Route>

          <Route path="dashboard" element={<Dashboard />}>
            <Route index={true} element={<UserHomePage />} />
            <Route index={false} path="jobs/:id" element={<Job />} />
            <Route index={false} path="jobs/edit/:id" element={<EditPage />} />
            <Route index={false} path="create" element={<Create />} />
            <Route index={false} path="search" element={<Search />} />
          </Route>

          {/* <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
