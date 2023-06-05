const TodoItem = ({ itemList, handleChange, delTodo }) => {
    
    return (
        <li>
            <input type="checkbox" checked={itemList.completed} onChange={() => handleChange(itemList.id)}/>
            <button onClick={() => delTodo(itemList.id)}>Delete</button>
            {itemList.title}
        </li>
    )
}

export default TodoItem;