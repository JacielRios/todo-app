import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItemSkeleton } from "./components/TodoItemSkeleton";
import { TodoContext, TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({
          loading,
          error,         
          searchedTodos,
          completeTodo,
          deleteTodo
        }) => (
          <TodoList>
            {loading && (
              <>
                <TodoItemSkeleton /> <TodoItemSkeleton /> <TodoItemSkeleton />{" "}
              </>
            )}
            {error && <p>Huno un error!!</p>}
            {!loading && searchedTodos.length === 0 && (
              <p>Crea tu primer TODO</p>
            )}

            {searchedTodos.map((item) => (
              <TodoItem
                key={item.text}
                text={item.text}
                completed={item.completed}
                onComplete={() => completeTodo(item.text)}
                onDelete={() => deleteTodo(item.text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </TodoProvider>
  );
}

export default App;
