import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todoArr: [
        {
            id: 1,
            title: "todo title",
            done: false,
        },
    ],
    addTodo: (todo) => {},
    toggleDone: (id) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, title) => {},
});

export const useTodo = () => useContext(TodoContext);
export const TodoProvider = TodoContext.Provider;
