import React from "react";
import "./User.css";
// Import React-Bootstrap components
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

export function User(props) {
  // Gets user name from current URL.
  const { name } = useParams();

  // Retrieves matching project from project list props using the 'name'
  // parameter from the URL.
  let project = [];

  props.projects[0].items.forEach((item) => {
    // Check GitHub list for matching value.
    if (item.owner.login === name) project = item;
  });

  if (project.length == 0) {
    // Checks GitLab list for matching value;
    props.projects[1].forEach((item) => {
      if (item.namespace.name === name) project = item;
    });
  }

  // Tests GitLabs avatar URL to determine appropriate source path
  let testURL = "";
  let imageSource = "";

  if (project.owner == null) {
    testURL = project.namespace.avatar_url.slice(0, 5);
    if (testURL == "https") {
      imageSource = project.namespace.avatar_url;
    } else {
      imageSource = `https://gitlab.com/${project.namespace.avatar_url}`;
    }
  }

  // Return a rendered card with user image and link.
  return (
    <Card>
      {project.owner == null ? (
        <Card.Img className="user-image" variant="top" src={imageSource} />
      ) : (
        <Card.Img
          className="user-image"
          variant="top"
          src={`${project.owner.avatar_url}`}
        />
      )}

      <Card.Body>
        {project.owner == null ? (
          <Card.Title>{project.namespace.name}</Card.Title>
        ) : (
          <Card.Title>{project.owner.login}</Card.Title>
        )}

        {project.owner == null ? (
          <Card.Link className="external" href={project.namespace.web_url}>
            GitLab Profile
          </Card.Link>
        ) : (
          <Card.Link className="external" href={project.owner.html_url}>
            GitHub Profile
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
}
