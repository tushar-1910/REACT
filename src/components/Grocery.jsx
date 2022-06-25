import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import React from "react";
import { v4 as uuid } from "uuid";

export const Grocery = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const getGrocery = () => {
    setLoading(true);
    fetch(`http://localhost:8080/task`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    getGrocery();
  }, []);

  const handleAdd = (item) => {
    const payload = {
      title: item,
      status: false
    };
    setLoading(true);
    fetch(`http://localhost:8080/task`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((res) => res.json())
      .then((res) => {
        setError(false);
        return getGrocery();
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/task/${id}`, {
        method: "DELETE"
      });
      getGrocery();
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  console.log(data);
  return (
    <>
      <GroceryInput handleAdd={handleAdd} />
      <GroceryList
        data={data}
        handleDelete={handleDelete}
        loading={loading}
        error={error}
      />
    </>
  );
};
