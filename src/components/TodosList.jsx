import { useTodosContext } from "@/context/useTodosContext";
import TodoItem from "@/components/TodoItem";

const TodosList = () => {
  const { todos } = useTodosContext();

  return (
    <ul>
      {todos.map((item) => (
        <TodoItem key={item.id} itemList={item} />
      ))}
    </ul>
  );
};

export default TodosList;
