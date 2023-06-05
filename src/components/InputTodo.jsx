import { useState } from "react";

const InputTodo = ( { addTodoItem }) => {

    const [title, setTitle] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        addTodoItem(title);
        setTitle('');
    }
    const handleInput = (e) => {
        setTitle(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Write her" value={title} onChange={handleInput}/>
            <button>Submit</button>
        </form>
    )
}

export default InputTodo;