import React from "react";

export const GroceryInput = ({ handleAdd }) => {
  const [item, setItem] = React.useState("");

  return (
    <>
      <input
        type="text"
        value={item}
        placeholder="Enter Grocery Item"
        onChange={(e) => setItem(e.target.value)}
      />
      <button
        onClick={() => {
          handleAdd(item);
          setItem("");
        }}
      >
        ADD ITEM
      </button>
    </>
  );
};
