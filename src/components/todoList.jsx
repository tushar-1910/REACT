export const TodoList = ({ todos }) => {
  return todos.map((todo) => <div key={todo.id}>{todo.title}</div>);
};
