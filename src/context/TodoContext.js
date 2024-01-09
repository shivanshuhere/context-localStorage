import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todoArr: [
        {
            id: 1,
            title: "todo title",
            done: false,
        },
    ],
    addTodo: (todoArr) => {},
    toggleDone: (id) => {},
});

export const useTodo = () => useContext(TodoContext);
export const TodoProvider = TodoContext.Provider;
