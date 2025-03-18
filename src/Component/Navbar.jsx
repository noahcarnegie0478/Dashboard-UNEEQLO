import React from "react";
import "boxicons";
import logo from "../assets/logo/logo.png";

// Unused property
function Navbar({ setPage }) {
  return (
    <div
      className="navbar-container bg-white flex items-center justify-between px-20 border-b-1 "
      // @REVIEW - Please either use className, or inline styling but not both of them. See https://tailwindcss.com/docs/styling-with-utility-classes#using-arbitrary-values on how to use custom value in tailwind
      style={{ width: "100%" }}
    >
      {/* logo */}
      <div className="left-nav ">
        {/* @REVIEW - Why using a space before the image when you can use padding/margin? */}{" "}
        <img
          src={logo}
          alt="uniqlo_logo"
          className="logo-img"
          // @REVIEW - Please either use className, or inline styling but not both of them. See https://tailwindcss.com/docs/styling-with-utility-classes#using-arbitrary-values on how to use custom value in tailwind
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
          {/* Why using a space before the image when you can use padding/margin? */}{" "}
          <box-icon name="user" type="solid"></box-icon>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
