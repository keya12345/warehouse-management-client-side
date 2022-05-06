import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/item`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto mb-3">
      <h1 className="text-primary m-4 text-center"> New Item Add</h1>
      <form className="d-flex flex-column " onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="mb-3"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-3"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-3"
          placeholder="SupplierName"
          type="text"
          {...register("supplierName")}
        />
        <input
          className="mb-3"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-3"
          placeholder="Image Url"
          type="text"
          {...register("img")}
        />
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
