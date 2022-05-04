import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./Items.css";
const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <h1 className="title">Items:{items.length}</h1>
      <div className="items-container">
        {items.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Items;
