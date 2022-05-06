import React, { useEffect, useState } from "react";

const ControlItem = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/item")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const deleteItem = (id) => {
    const proceed = window.confirm("are you want delete this one?");
    if (proceed) {
      const url = `http://localhost:5000/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Control Item</h2>
      {items.map((item) => (
        <div key={item._id}>
          <h3>
            {item.name} <button onClick={() => deleteItem(item._id)}>X</button>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ControlItem;
