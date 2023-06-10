import { useState } from "react";
import { useTodosContext } from "@/context/useTodosContext";
import { FaPlusCircle } from "react-icons/fa"

const InputTodo = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const { addTodoItem } = useTodosContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle("");
      setMessage("");
    } else {
      setMessage("Please add an item");
    }
  };
  const handleInput = (e) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add to your list"
          value={title}
          onChange={handleInput}
          className="input-text"
        />
        <button className="input-submit">
        <FaPlusCircle
          color="#5e5e5e"
          size="20px"
          className="submit-icon"
        />
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

export default InputTodo;
