import React from "react";
import "./Display.css";
// Import React-Router
import { Routes, Route } from "react-router-dom";
// Import Components
import { Hunter } from "./Hunter.js";
import { ProjectList } from "./ProjectList.js";
import { Project } from "./Project.js";
import { User } from "./User.js";

export function Display(props) {
  // Returns display compomonent based on URL value
  return (
    <Routes>
      <Route exact={true} path="/" element={<Hunter />} />
      <Route
        path="hunt/projects"
        element={<ProjectList projects={props.projects} error={props.error} />}
      />
      <Route
        path="hunt/project/:id"
        element={<Project projects={props.projects} />}
      />
      <Route
        path="hunt/user/:name"
        element={<User projects={props.projects} />}
      />
      <Route path="*" element={<p>Invalid URL</p>} />
    </Routes>
  );
}
