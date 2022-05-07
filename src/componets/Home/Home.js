import React from "react";
import Banner from "../Banner/Banner";
import ComputerCollection from "../ComputerCollection/ComputerCollection";
import Items from "../Items/Items";
import LaptopCollection from "../LaptopCollection/LaptopCollection";

const Home = () => {
  return (
    <div>
      <h1 className="text-primary text-center mb-5 mt-4 fs-1 fw-bolder">
        Electronic Warehouse Management{" "}
      </h1>
      <Banner></Banner>
      <Items></Items>
      <LaptopCollection></LaptopCollection>
      <ComputerCollection></ComputerCollection>
    </div>
  );
};

export default Home;
