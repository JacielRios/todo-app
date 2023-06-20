import React from "react";
import "../css/TodoForm.css";
import { TodoContext } from "../context/TodoContext";

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = (e) => {
    setOpenModal(false);
  };

  const onChange = (e) => {
    setNewTodoValue(e.target.value)
  }
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder="Hacer la comida" value={newTodoValue} onChange={onChange}/>
      <div className="todoform-button-container">
        <button
          type="button"
          onClick={onCancel}
          className="todoform-button todoform-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="todoform-button todoform-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
