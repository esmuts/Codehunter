import React from "react";
import { parseDate } from "../utilities/ParseDate.js";
import "./Project.css";
import { Link, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

// Component returns a card describing details of a coding project.
export function Project(props) {
  // Gets project id from current URL.
  const { id } = useParams();

  // Retrieves matching project from project list props using the ID parameter
  // from the URL.
  let project = [];

  props.projects[0].items.forEach((item) => {
    // Check GitHub list for matching value.
    if (item.id.toString() == id) project = item;
  });

  if (project.length == 0) {
    // Checks GitLab list for matching value;
    props.projects[1].forEach((item) => {
      if (item.id.toString() == id) project = item;
    });
  }

  // Return a rendered card with project details and links.
  return (
    <Card className="project">
      <Card.Body>
        <Card.Title>Project Name: {project.name}</Card.Title>

        {project.language == null ? (
          <Card.Subtitle className="mb-2 text-muted">
            Created: {parseDate(project.created_at)}
          </Card.Subtitle>
        ) : (
          <Card.Subtitle className="mb-2 text-muted">
            Language: {project.language}
            <br />
            Created: {parseDate(project.created_at)}
          </Card.Subtitle>
        )}

        {project.description == "" ? (
          <Card.Text>
            <em>No description</em>
          </Card.Text>
        ) : (
          <Card.Text>{project.description}</Card.Text>
        )}

        {project.updated_at == null ? (
          <Card.Text>
            <em>Last updated: {parseDate(project.last_activity_at)}</em>
          </Card.Text>
        ) : (
          <Card.Text>
            <em>Last updated: {parseDate(project.updated_at)}</em>
          </Card.Text>
        )}

        {project.html_url == null ? (
          <Card.Link className="external" href={project.web_url}>
            GitLab Repo
          </Card.Link>
        ) : (
          <Card.Link className="external" href={project.html_url}>
            GitHub Repo
          </Card.Link>
        )}
        <br />
        {project.owner == null ? (
          <Link to={`/hunt/user/${project.namespace.name}`}>User Info</Link>
        ) : (
          <Link to={`/hunt/user/${project.owner.login}`}>User Info</Link>
        )}
      </Card.Body>
    </Card>
  );
}
