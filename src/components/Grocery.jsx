import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import React from "react";
import { v4 as uuid } from "uuid";

export const Grocery = () => {
  const [data, setData] = React.useState([]);

  const handleAdd = (item) => {
    const payload = {
      item: item,
      id: uuid()
    };

    setData([...data, payload]);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((data) => data.id !== id);
    setData(updatedData);
  };
  console.log(data);
  return (
    <>
      <GroceryInput handleAdd={handleAdd} />
      <GroceryList data={data} handleDelete={handleDelete} />
    </>
  );
};
