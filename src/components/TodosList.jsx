import TodoItem from "@/components/TodoItem"

const TodosList = ({ todoProps }) => {
    return (
        <ul>
            {todoProps.map(item => (
                <TodoItem key={item.id} itemList={item} />
            ))}
        </ul>
    )
}

export default TodosList;