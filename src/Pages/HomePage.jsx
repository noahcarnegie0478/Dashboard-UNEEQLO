import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "boxicons";
import Navbar from "../Component/Navbar";
import AdminManager from "../Component/AdminManager";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BannerForm from "../Component/BannerForm";
import CategoryForm from "../Component/CategoryForm";
import ItemForm from "../Component/ItemForm";

function FormDisplay(page) {
  if (page === "banner-create") {
    return <BannerForm />;
  }
  return null;
}

function HomePage() {
  const [page, setPage] = useState("banner-create");

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <div className="Homepage-container ">
      <Navbar />
      <div className="main-content flex">
        <AdminManager setPage={setPage} />
        {/* This logic here has no issue with performance, but the logic could be handled in a separate function component like this:

          function FormDisplay(page) {
            if (page === "banner-create") {
              return <BannerForm />;
            }

            if (page === "banner-create") {
              return <CategoryForm />;
            }

            return <ItemForm />;
            // You can use switch/case or if else, that's up to you to choose
          }

          function HomePage() {
            const [page, setPage] = useState("banner-create");

            ...

            return (
              <div className="Homepage-container ">
                ...
                <div className="main-content flex">
                ...
                // Pass page value as property to FormDisplay to handle the component display logic
                  <FormDisplay page={page} />
                </div>
              </div>
            );
          }

          */}
        {page === "banner-create" && <BannerForm />}
        {page === "category-create" && <CategoryForm />}
        {page === "item-create" && <ItemForm />}
      </div>
    </div>
  );
}

export default HomePage;
