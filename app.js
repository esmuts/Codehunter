/**
 * IFS L3T30 Capstone IV – Full Stack React & Express
 *
 * @author Eckard Smuts
 *
 * I consulted the following sites for help:
 *
 * Express project structure –
 * https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/projectstructre/separateexpress.md
 * https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way
 *
 * Using Axios for http requests –
 * https://axios-http.com/docs/example
 * https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/
 *
 * Using the GitHub API –
 * https://medium.com/frontend-handbooks/a-simple-guide-of-github-rest-api-5f18f0034b4c
 *
 * Using the GitLab API –
 * https://medium.com/devops-with-valentine/how-to-use-the-gitlab-rest-api-ba4e4ca1fcae
 */

// Imports
const express = require("express");
const helmet = require("helmet");
const routes = require("./routes/index");

const app = express();

// App middleware
app.use(express.json());
app.use("/hunt", routes);
app.use(helmet());

// App functionality

app.get("/", (req, res) => res.send("App is working"));

module.exports = app;
