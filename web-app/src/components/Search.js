import React, { useState } from "react";
import "./Search.css";

export function Search(props) {
  // Sets state for rendering search box value and passing a new seach query to
  // the parent component on submission.
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let tempQuery = query;
    // Resets form value to blank.
    setQuery("");
    props.handleSubmit(tempQuery);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form className="query" onSubmit={handleSubmit}>
      <label>Enter your search term:</label>
      <br />
      <input type="text" value={query} onChange={handleChange} />
      <input className="submit-button" type="submit" value="Submit" />
    </form>
  );
}
