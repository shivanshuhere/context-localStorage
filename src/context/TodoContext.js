import { createContext, useContext } from "react";

const TodoContext = createContext({
    todoArr: [
        {
            id: Date.now(),
            title: "todo title",
            done: false,
        },
    ],
    addTodo: (todoArr) => {},
    toggleDone: (id) => {},
});

export const useTodo = () => useContext(TodoContext);
export const TodoProvider = TodoContext.Provider;
