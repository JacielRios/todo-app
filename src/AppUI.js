import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItemSkeleton } from "./components/TodoItemSkeleton";
import { Modal } from "./components/Modal";
import { TodoForm } from './components/TodoForm';
import { TodoContext } from "./context/TodoContext";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodoItemSkeleton /> <TodoItemSkeleton /> <TodoItemSkeleton />{" "}
          </>
        )}
        {error && <p>Huno un error!!</p>}
        {!loading && searchedTodos.length === 0 && <p>Crea tu primer TODO</p>}

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

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}/>

      {openModal && <Modal><TodoForm/></Modal>}
    </>
  );
}

export { AppUI };
