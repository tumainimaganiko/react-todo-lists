import { useState } from "react"
import styles from "@/styles/TodoItem.module.css"

const TodoItem = ({ itemList, handleChange, delTodo, setUpdate }) => {
    const [edit, setEdit] = useState(false);

    let viewMode = {};
    let editMode = {};
    if(edit){
        viewMode.display = 'none';
    }else {
        editMode.display = 'none';
    }
    const handleEdit = () => {
        setEdit(true);
    }

    const handleUpdatedDone = (event) => {
        if(event.key === 'Enter'){
            setEdit(false);
        }
    }

    const completedStyle = {
        fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
    }
    
    return (
        <li className={styles.item}>
            <div className={styles.content} style={viewMode}>
            <input type="checkbox" checked={itemList.completed} onChange={() => handleChange(itemList.id)}/>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() => delTodo(itemList.id)}>Delete</button>
            <span style={itemList.completed ? completedStyle : null}>
            {itemList.title}
            </span>
            </div>
            <input type="text" value={itemList.title} className={styles.textInput} style={editMode} 
                onChange={(e) => setUpdate(e.target.value, itemList.id)} onKeyDown={handleUpdatedDone}
            />
        </li>
    )
}

export default TodoItem;