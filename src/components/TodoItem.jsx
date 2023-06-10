import { useState } from "react";
import PropTypes from "prop-types";
import { useTodosContext } from "@/context/useTodosContext";
import styles from "@/styles/TodoItem.module.css";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const TodoItem = ({ itemList }) => {
  const [edit, setEdit] = useState(false);
  const { handleChange, delTodo, setUpdate } = useTodosContext();
  const [updateInput, setUpdateInput] = useState(itemList.title);

  let viewMode = {};
  let editMode = {};
  if (edit) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  const handleEdit = () => {
    setEdit(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setUpdate(updateInput, itemList.id);
      setEdit(false);
    }
  };

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemList.completed}
          onChange={() => handleChange(itemList.id)}
        />
        <button onClick={handleEdit}>
          <AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }} />
        </button>
        <button onClick={() => delTodo(itemList.id)}>
          <FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }} />
        </button>
        <span style={itemList.completed ? completedStyle : null}>
          {updateInput}
        </span>
      </div>
      <input
        type="text"
        value={updateInput}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdateInput(e.target.value)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  itemList: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
