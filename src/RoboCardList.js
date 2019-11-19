import React from "react";
import Card from "./RoboCard";

const CardList = ({ robots }) => (
  <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
    {robots.map((user, i) => {
      return (
        <Card
          key={robots[i].id}
          id={robots[i].id}
          name={robots[i].name}
          email={robots[i].email}
        />
      );
    })}
  </div>
);

export default CardList;
