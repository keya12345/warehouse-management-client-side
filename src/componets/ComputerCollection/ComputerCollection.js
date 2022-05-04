import React, { useEffect, useState } from "react";
import SingleComputer from "../SingleComputer/SingleComputer";
import "./ComputerCollection.css";

const ComputerCollection = () => {
  const [computers, setComputers] = useState([]);
  useEffect(() => {
    fetch("computerCollection.json")
      .then((res) => res.json())
      .then((data) => setComputers(data));
  }, []);
  return (
    <div>
      <h1 className="title">Computer Collection{computers.length}</h1>
      <div className="computerCollection-container">
        {computers.map((computer) => (
          <SingleComputer
            key={computer.id}
            computer={computer}
          ></SingleComputer>
        ))}
      </div>
    </div>
  );
};

export default ComputerCollection;
