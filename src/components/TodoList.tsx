import React from "react";

const TodoList: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the course" }];
  return (
    <ul>
      {todos.map(todo => (
        <li>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
