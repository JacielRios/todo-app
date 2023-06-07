import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

import "./App.css";

const defaultTodos = [
  { text: "jugar baket", completed: false },
  { text: "comprar balon", completed: false },
  { text: "comprar canasta", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={1} total={5} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((item) => (
          <TodoItem key={item.text} text={item.text} completed={item.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
