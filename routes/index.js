// Import modules
const express = require("express");
const axios = require("axios");
const router = express.Router();

// Sets external API URI variables
const GITHUB = "https://api.github.com";
const GITLAB = "https://gitlab.com/api/v4";

// Sets variable for holding retrieved project list.
let projectList = [];

// Route retrieves a list of searched-for projects from the GitHub APIs
router.get("/projects", (req, res, next) => {
  axios
    .get(`${GITHUB}/search/repositories?q=${req.query.field}`)
    .then((result) => {
      // Stores the data portion of the API GET result in an array.
      projectList.push(result.data);
      // Calls next middleware function for the "/projects" route (GitLab API)
      next();
    })
    .catch((err) => {
      res.send(err);
    });
});

// Route retrieves list of searched-for projects from GitLab API
router.get("/projects", (req, res) => {
  axios
    .get(`${GITLAB}/projects?search=${req.query.field}`)
    .then((result) => {
      // Adds the data portion of the API GET result to the array.
      projectList.push(result.data);
      // Resets projectList array for subsequent requests.
      let tempList = projectList;
      projectList = [];
      // Returns a project array containing both GitHub and GitLab data.
      res.send(tempList);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
