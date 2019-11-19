import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import CardList from "./RoboCardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "./App.css";

const App = () => {
  const [robots, setRobots] = useState(null);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setRobots(users));
  }, []);

  const onSearchChange = event => {
    setSearchfield(event.target.value);
  };

  const getFilteredRobots = () =>
    robots.filter(robot =>
      robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );

  return !robots ? (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Spinner animation="grow" variant="info" />
    </div>
  ) : (
    <div style={{ padding: "2rem 0" }}>
      <header>
        <h1 className="title">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
      </header>
      <Scroll>
        <CardList robots={getFilteredRobots()} />
      </Scroll>
    </div>
  );
};

export default App;
