import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "boxicons";
import Navbar from "../Component/Navbar";
import AdminManager from "../Component/AdminManager";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BannerForm from "../Component/BannerForm";
import CategoryForm from "../Component/CategoryForm";

function HomePage() {
  const [page, setPage] = useState("banner-create");
  const [content, setContent] = useState(null);

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <div className="Homepage-container ">
      <Navbar />

      <div className="main-content flex">
        <AdminManager setPage={setPage} />
        {page === "banner-create" && <BannerForm />}
        {page === "category-create" && <CategoryForm />}
      </div>
    </div>
  );
}

export default HomePage;
