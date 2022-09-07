import React, { useState, useEffect } from "react";
import TopCard from "./components/TopCard/TopCard";

import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Dashboard/Home/Home";
import Create from "./Pages/Dashboard/Create/Create";
import Job from "./Pages/Job/Job";
import EditPage from "./Pages/Dashboard/EditPage/EditPage";
import Search from "./Pages/Search/Search";
import Footer from "./components/Footer/Footer";

// import { db } from "./firebaseConfig";
// import { collection, getDocs } from "firebase/firestore";

function App() {
  const [jobApps, setJobApps] = useState([]);

  // const appsCollectionRef = collection(db, "Job-Applications");

  // useEffect(() => {
  //   const getApps = async () => {
  //     const data = await getDocs(appsCollectionRef);
  //     setJobApps(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     console.log(data.docs);
  //   };
  //   getApps();
  // }, []);

  return (
    <div className="app=container flex flex-col min-w-[100vw] min-h-[100vh] ">
      <div className="App ">
        <BrowserRouter>
          <TopCard />
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
