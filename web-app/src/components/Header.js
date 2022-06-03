import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <div className="title">
      <Link to={{ pathname: "/" }}>
        <h1>Codehunter</h1>
      </Link>
      <small>Search GitHub and GitLab for projects on any topic.</small>
    </div>
  );
}
