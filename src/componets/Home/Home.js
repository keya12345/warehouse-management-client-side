import React from "react";
import Banner from "../Banner/Banner";
import ComputerCollection from "../ComputerCollection/ComputerCollection";
import Items from "../Items/Items";
import LaptopCollection from "../LaptopCollection/LaptopCollection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Items></Items>
      <LaptopCollection></LaptopCollection>
      <ComputerCollection></ComputerCollection>
    </div>
  );
};

export default Home;
