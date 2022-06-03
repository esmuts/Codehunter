import React from "react";
import { Link } from "react-router-dom";
import "./ProjectList.css";

// This component returns a list of coding projects.
export function ProjectList(props) {
  // Returns message if the GET request resolved with an error.
  if (props.error) {
    return <p>Error: {props.error.message}</p>;

    // Returns message if the GET request has not yet resolved.
  } else if (!props.projects) {
    return <p>Loading...</p>;

    // Returns message if GET request returns no valid data.
  } else if (
    (props.projects[0].total_count === 0 && props.projects[1].length === 0) ||
    props.projects.message
  ) {
    return (
      <p>
        Sorry, no data could be retrieved for that topic. Please try again with
        another search term.
      </p>
    );

    // Renders a list of projects if GET request has resolved with valid values.
  } else {
    // Creates a list of elements from the project items array (GitHub).
    const gitHubList = props.projects[0].items.map((projectItem) => (
      // Project ID is used to generate unique ID.
      <li key={projectItem.id.toString()}>
        <Link to={{ pathname: `/hunt/project/${projectItem.id}` }}>
          {projectItem.name}
        </Link>{" "}
        – <em>{projectItem.description}</em>
      </li>
    ));

    // Creates a similar list for the GitLab part of the items array.
    const gitLabList = props.projects[1].map((projectItem) => (
      // Project ID is used to generate unique ID.
      <li key={projectItem.id.toString()}>
        <Link to={{ pathname: `/hunt/project/${projectItem.id}` }}>
          {projectItem.name}
        </Link>{" "}
        – <em>{projectItem.description}</em>
      </li>
    ));

    return (
      <ul className="project-list">
        {gitHubList} {gitLabList}
      </ul>
    );
  }
}
