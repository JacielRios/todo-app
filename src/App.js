import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

const defaultTodos = [
  { text: "jugar baket", completed: false },
  { text: "comprar balon", completed: true },
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
