import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const [user] = useAuthState(auth);
  useEffect(() => {
    const url = `https://shielded-harbor-12298.herokuapp.com/item/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const handleOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      item: item.name,
      itemId: itemId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios
      .post("https://shielded-harbor-12298.herokuapp.com/order", order)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast("order accept");
          event.target.reset();
        }
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h1>please Checkout:{item.name}</h1>
      <form onSubmit={handleOrder}>
        <input
          className="mb-3 w-100"
          type="text"
          name="name"
          id=""
          value={user?.displayName}
          placeholder="name"
          required
          readOnly
        />
        <br />
        <input
          className="mb-3 w-100"
          type="email"
          name="email"
          id=""
          value={user?.email}
          placeholder="email"
          required
          readOnly
        />
        <br />
        <input
          className="mb-3 w-100"
          type="number"
          name="phone"
          id=""
          placeholder="phone"
          autoComplete="off"
          required
        />
        <br />
        <input
          className="mb-3 w-100"
          type="text"
          name="address"
          id=""
          placeholder="address"
          autoComplete="off"
          required
        />
        <br />
        <input
          className="mb-3 w-100"
          type="text"
          name="itemName"
          id=""
          value={item.name}
          placeholder="itemName"
          required
          readOnly
        />
        <br />
        <input className="mb-3 btn btn-info p-2" type="submit" value=" Order" />
      </form>
    </div>
  );
};

export default Checkout;
