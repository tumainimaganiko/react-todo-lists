import TodoItem from "@/components/TodoItem"

const TodosList = ({ todoProps, handleChange }) => {
    return (
        <ul>
            {todoProps.map(item => (
                <TodoItem key={item.id} itemList={item} handleChange={handleChange} />
            ))}
        </ul>
    )
}

export default TodosList;