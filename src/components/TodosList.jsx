import TodoItem from "@/components/TodoItem"

const TodosList = ({ todoProps, handleChange, delTodo }) => {
    return (
        <ul>
            {todoProps.map(item => (
                <TodoItem key={item.id} itemList={item} handleChange={handleChange} delTodo={delTodo} />
            ))}
        </ul>
    )
}

export default TodosList;