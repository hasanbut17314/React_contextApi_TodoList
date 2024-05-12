import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: {
        id: 1,
        todo: 'this is a task',
        completed: false
    },
    addTodo: (todo) => {},
    updateTodo: (todo, id) => {},
    deleteTodo: (id) => {},
    completeToggle: (id) => {}
});

export const TodoProvider = TodoContext.Provider;
export default function useTodo() {
    return useContext(TodoContext);
}