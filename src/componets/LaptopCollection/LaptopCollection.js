import React, { useEffect, useState } from "react";
import SingleLaptop from "../SingleLaptop/SingleLaptop";
import "./LaptopCollection.css";
const LaptopCollection = () => {
  const [laptops, setLaptops] = useState([]);
  useEffect(() => {
    fetch("laptopCollection.json")
      .then((res) => res.json())
      .then((data) => setLaptops(data));
  }, []);
  return (
    <div id="laptopCollection">
      <h1 className="title mt-5">Warehouse Management Laptop Collection</h1>
      <div className="laptopCollection-container">
        {laptops.map((laptop) => (
          <SingleLaptop key={laptop.id} laptop={laptop}></SingleLaptop>
        ))}
      </div>
    </div>
  );
};

export default LaptopCollection;
