/**
 * IFS L3T30 Capstone IV – Full Stack React & Express
 *
 * @author Eckard Smuts
 *
 * I consulted the following sites for help:
 *
 * Helper functions in React –
 * https://ncoughlin.com/posts/react-component-helper-functions/
 *
 * Using react-router-dom <Redirect> component –
 * https://www.pluralsight.com/guides/how-to-set-react-router-default-route-redirect-to-home
 *
 * Conditional rendering witth function components –
 * https://handsonreact.com/docs/conditional-rendering
 *
 * Using react-bootstrap cards –
 * https://react-bootstrap.github.io/components/cards/
 *
 * Converting dates –
 * https://www.w3schools.com/js/js_date_formats.asp
 * https://www.w3schools.com/jsref/jsref_toisostring.asp
 *
 * React testing help –
 * https://reactjs.org/docs/testing-recipes.html
 * https://reactjs.org/docs/test-utils.html#act
 *
 * Triggering onChange events –
 * https://jetrockets.com/blog/onchange-trigger-example-with-react
 *
 *
 */

import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
// Import components
import { Header } from "./components/Header.js";
import { Search } from "./components/Search.js";
import { Display } from "./components/Display.js";
// Import React-Bootstrap components
import { Container, Row } from "react-bootstrap";

function App() {
  // useNavigate allows for programmatic site navigation.
  let navigate = useNavigate();

  // Sets state to store fetch results.
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(null);

  // Function retrieves project data via API GET request.
  async function getProjects(query) {
    // Navigates to GitHub project list URL
    navigate("/hunt/projects");
    try {
      const response = await axios.get(`?field=${query}`);
      setProjects(response.data);
    } catch (err) {
      setError(err);
    }
  }

  // Function handles form submission of search query in 'Search' component.
  function handleSubmit(query) {
    if (!query) {
    } else {
      // Resets project list state to null
      setProjects(null);
      // Call API GET method.
      getProjects(query);
    }
  }

  // Renders the app.
  return (
    <Container className="app">
      <Row className="header">
        <Header />
      </Row>
      <Row className="search">
        <Search handleSubmit={handleSubmit} />
      </Row>
      <Row className="display">
        <Display projects={projects} error={error} />
      </Row>
    </Container>
  );
}

export default App;
