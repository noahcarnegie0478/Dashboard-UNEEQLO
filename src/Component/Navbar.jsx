import React from "react";
import "boxicons";
import logo from "../assets/logo/logo.png";

function Navbar({ setPage }) {
  return (
    <div
      className="navbar-container bg-white flex items-center justify-between px-20 border-b-1 "
      style={{ width: "100%" }}
    >
      {/* logo */}
      <div className="left-nav ">
        {" "}
        <img
          src={logo}
          alt="uniqlo_logo"
          className="logo-img"
          style={{ width: "100px", height: "100px" }}
        />
      </div>

      <div className="right-nav flex justify-between gap-5">
        {/* notification */}
        <div className="notification">
          <box-icon name="notification" type="solid"></box-icon>
        </div>

        {/* login */}
        <div className="login-logout">
          {" "}
          <box-icon name="user" type="solid"></box-icon>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
