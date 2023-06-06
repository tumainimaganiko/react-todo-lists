import styles from "@/styles/TodoItem.module.css"

const TodoItem = ({ itemList, handleChange, delTodo }) => {

    const completedStyle = {
        fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
    }
    
    return (
        <li className={styles.item}>
            <div className={styles.content}>
            <input type="checkbox" checked={itemList.completed} onChange={() => handleChange(itemList.id)}/>
            <button onClick={() => delTodo(itemList.id)}>Delete</button>
            <span style={itemList.completed ? completedStyle : null}>
            {itemList.title}
            </span>
            </div>
        </li>
    )
}

export default TodoItem;