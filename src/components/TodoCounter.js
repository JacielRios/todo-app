import React from "react";
import { TodoContext } from "../context/TodoContext";

import "../css/TodoCounter.css";

function TodoCounter() {
    const {completedTodos, totalTodos} = React.useContext(TodoContext);

  return (
    <h1 className="todo-counter">
      Has completado {completedTodos} de {totalTodos} TODOS
    </h1>
  );
}

export { TodoCounter };
