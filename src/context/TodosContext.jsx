import {  useState, useEffect, createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const TodosContext = createContext(null);

export const TodosProvider = ({ children }) => {

    // Retrieving Data from localStorage
  const getInitialTodos = () => {
    const temp = localStorage.getItem("myTodos");
    const savedTodo = JSON.parse(temp);
    return savedTodo || [];
  };
  const [todos, setTodos] = useState(getInitialTodos());

  // Storing Data in localStorage
  useEffect(() => {
    const tempData = JSON.stringify(todos);
    localStorage.setItem("myTodos", tempData);
  }, [todos]);

    // Editing saved tasks
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title === updatedTitle;
        }
        return todo;
      })
    );
  };

  // Adding a new todo
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Editing completed Status
  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  // Deleting selected todo
  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  return (
    <TodosContext.Provider
      value={{
        todos,
        handleChange,
        delTodo,
        addTodoItem,
        setUpdate,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
export const useTodosContext = () => useContext(TodosContext);

// const TodosContext = createContext(null);

// export const TodosProvider = ({ children }) => {
//   return (
//     <TodosContext.Provider value={'todos data'}>
//       {children}
//     </TodosContext.Provider>
//   );
// };
// export const useTodosContext = () => useContext(TodosContext);