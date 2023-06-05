import { useState } from "react";
import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList"

const TodosLogic = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Setup development environment',
            completed: true,
          },
          {
            id: 2,
            title: 'Develop website and add content',
            completed: false,
          },
          {
            id: 3,
            title: 'Deploy to live server',
            completed: false,
          },
    ])

    const addTodoItem = (title) => {
        console.log(title);
        const newTodo = {
            id:4,
            title: title,
            completed: false
        }
        setTodos([...todos,newTodo])
    }

    const handleChange = (id) => {
        setTodos(prevState => 
                prevState.map((todo) => {
                    if(todo.id === id){
                        return ({
                            ...todo,
                            completed: !todo.completed,
                        })
                    }
                    return todo;
                })
            )
    }

    const delTodo = (id) => {
        setTodos([...todos.filter(todo => (todo.id !== id))])
    }

    return (
        <>
        <InputTodo addTodoItem={addTodoItem} />
        <TodosList todoProps={todos} handleChange={handleChange} delTodo={delTodo} />
        </>
    )
}

export default TodosLogic;