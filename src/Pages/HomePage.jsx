import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "boxicons";
import Navbar from "../Component/Navbar";
import AdminManager from "../Component/AdminManager";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BannerForm from "../Component/BannerForm";

function HomePage() {
  const [page, setPage] = useState(null);
  const [content, setContnent] = useState(null);

  return (
    <div className="Homepage-container ">
      <Navbar />

      <div className="main-content flex">
        <AdminManager setPage={setPage} />
        <BannerForm />
      </div>
    </div>
  );
}

export default HomePage;
