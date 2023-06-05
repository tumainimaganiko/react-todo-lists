import { useState } from "react";

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write her"
          value={title}
          onChange={handleInput}
        />
        <button>Submit</button>
      </form>
      <span>{message}</span>
    </>
  );
};

export default InputTodo;
