import React, {useState} from 'react'
import useTodo from '../Context/TodoContext';

function TodoForm() {
    
    let [todo, setNewTodo] = useState("");
    let {addTodo} = useTodo()

    let addTodoNew = (e) => {
        e.preventDefault()
        if(!todo) return

        addTodo({todo, completed: false})
        setNewTodo('');
    }

    return (
        <form onSubmit={addTodoNew}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

