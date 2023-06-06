import { useState } from "react";
import InputTodo from "@/components/InputTodo";
import TodosList from "@/components/TodosList"
import { v4 as uuidv4 } from "uuid";

const TodosLogic = () => {
    const [todos, setTodos] = useState([
        {
            id: uuidv4(),
            title: 'Setup development environment',
            completed: true,
          },
          {
            id: uuidv4(),
            title: 'Develop website and add content',
            completed: false,
          },
          {
            id: uuidv4(),
            title: 'Deploy to live server',
            completed: false,
          },
    ])
    // Editing saved tasks
    const setUpdate = (updatedTitle,id) => {
        setTodos( 
            todos.map(todo => {
                if(todo.id === id){
                    todo.title === updatedTitle;
                }
                return todo;
            })
            )
    }

    // Adding a new todo
    const addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        setTodos([...todos,newTodo])
    }

    // Editing completed Status
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

    // Deleting selected todo
    const delTodo = (id) => {
        setTodos([...todos.filter(todo => (todo.id !== id))])
    }

    return (
        <>
        <InputTodo addTodoItem={addTodoItem} />
        <TodosList todoProps={todos} handleChange={handleChange} delTodo={delTodo} setUpdate={setUpdate} />
        </>
    )
}

export default TodosLogic;