const TodoItem = ({ itemList, handleChange}) => {
    
    return (
        <li>
            <input type="checkbox" checked={itemList.completed} onChange={() => handleChange(itemList.id)}/>
            {itemList.title}
        </li>
    )
}

export default TodoItem;