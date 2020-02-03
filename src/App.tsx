import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/Todo";
import { Todo } from "./components/types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: text }
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}></NewTodo>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}></TodoList>
    </div>
  );
};

export default App;
