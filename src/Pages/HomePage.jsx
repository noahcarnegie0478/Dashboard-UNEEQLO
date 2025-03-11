import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "boxicons";
import Navbar from "../Component/Navbar";
import AdminManager from "../Component/AdminManager";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function HomePage() {
  return (
    <div className="Homepage-container bg-blue-500 ">
      <Navbar />
      <AdminManager />
    </div>
  );
}

export default HomePage;
