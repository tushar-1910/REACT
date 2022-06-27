import React from "react";
import { Spinner } from "@chakra-ui/spinner";
import { TodoList } from "./todoList";
import { TodoInput } from "./todoInput";

export const Todo = () => {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState();

  const getTodos = async () => {
    try {
      setLoading(true);
      let result = await fetch(
        `http://localhost:8080/task?_page=${page}&_limit=3`
      );
      let res = await result.json();
      setTodos(res);
      // console.log(result.headers.entries());
      for (var pair of result.headers.entries()) {
        if (pair[0] === "x-total-count") {
          // console.log(pair[1]);
          setLastPage(Math.ceil(pair[1] / 3));
        }
      }
      // return res;
    } catch (error) {
      // console.log(error);
      setError(true);
      setTodos([]);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    getTodos();
  }, [page]);

  const addTodo = () => {
    const payload = {
      title: inputValue,
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
        return getTodos();
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Error</h1>
  ) : (
    <div>
      <TodoInput addTodo={addTodo} />
      <br />
      <br />
      <TodoList todos={todos} />
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        PREV
      </button>
      <button onClick={() => setPage(page + 1)} disabled={page === lastPage}>
        NEXT
      </button>
    </div>
  );
};
