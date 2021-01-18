import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar" style={{ padding: "20px", color: "#fff" }}>
      <h1>React App using Parcel</h1>

      <div className="links" style={{ marginTop: "10px" }}>
        <Link to="/" style={{ marginRight: "20px" }}>
          Home
        </Link>
        <Link to="/page1">Page 1</Link>
      </div>
    </div>
  );
};
