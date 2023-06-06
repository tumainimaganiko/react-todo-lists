import styles from "@/styles/TodoItem.module.css"

const TodoItem = ({ itemList, handleChange, delTodo }) => {
    
    return (
        <li className={styles.item}>
            <div className={styles.content}>
            <input type="checkbox" checked={itemList.completed} onChange={() => handleChange(itemList.id)}/>
            <button onClick={() => delTodo(itemList.id)}>Delete</button>
            {itemList.title}
            </div>
        </li>
    )
}

export default TodoItem;