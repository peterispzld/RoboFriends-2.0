import React from "react";
import Card from "react-bootstrap/Card";

const RoboCard = ({ id, name, email }) => (
  <Card style={{ minWidth: "9rem", margin: "1rem" }}>
    <Card.Img variant="top" src={`https://robohash.org/${id}?200x200`} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle>{email}</Card.Subtitle>
    </Card.Body>
  </Card>
);

export default RoboCard;
