import React from "react";
import "./SingleLaptop.css";
const SingleLaptop = ({ laptop }) => {
  const { name, img, description, price } = laptop;
  return (
    <div className="single-laptop">
      <img height={300} width={300} src={img} alt="" />
      <h1>{name}</h1>
      <h3>Price:{price}</h3>
      <p>Description:{description}</p>
      <button>Update Item</button>
    </div>
  );
};

export default SingleLaptop;
