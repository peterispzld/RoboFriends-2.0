import React from "react";
import Form from "react-bootstrap/Form";

const SearchBox = ({ searchChange }) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Form.Control
      style={{ minWidth: "4rem", width: "32rem", margin: "0 2rem" }}
      size="lg"
      type="search"
      placeholder="Search RoboFriends"
      onChange={searchChange}
    />
  </div>
);

export default SearchBox;
