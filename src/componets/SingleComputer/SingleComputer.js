import React from "react";
import "./SingleComputer.css";
const SingleComputer = ({ computer }) => {
  const { name, img, description, price } = computer;
  return (
    <div className="single-computer">
      <img height={300} width={300} src={img} alt="" />
      <h1>{name}</h1>
      <h4>Price:{price}</h4>
      <p>Description:{description}</p>
      <button className="btn btn-primary">Update Item</button>
    </div>
  );
};

export default SingleComputer;
