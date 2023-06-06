import TodoItem from "@/components/TodoItem"

const TodosList = ({ todoProps, handleChange, delTodo, setUpdate }) => {
    return (
        <ul>
            {todoProps.map(item => (
                <TodoItem key={item.id} itemList={item} handleChange={handleChange} delTodo={delTodo} setUpdate={setUpdate} />
            ))}
        </ul>
    )
}

export default TodosList;