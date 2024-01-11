import { useEffect, useState } from "react";
import { TodoForm, TodoItem } from "./components";
import { TodoProvider, useTodo } from "./context/TodoContext";
function App() {
    const [todoArr, setTodoArr] = useState([]);

    // add todo
    const addTodo = (todo) => {
        setTodoArr((prev) => [todo, ...prev]);
    };

    // checkbox toggle
    const toggleDone = (id) => {
        setTodoArr((prev) => {
            return prev.map((ele) => {
                return ele.id === id ? { ...ele, done: !ele.done } : ele;
            });
        });
    };

    // remove todo
    const deleteTodo = (id) => {
        setTodoArr((prev) => {
            return prev.filter((ele) => {
                return ele.id !== id ? ele : "";
            });
        });
    };

    // edit todo
    const updateTodo = (id, title) => {
        setTodoArr((prev) => {
            return prev.map((ele) => {
                return ele.id === id ? { title, ...ele } : ele;
            });
        });
    };

    // get array from local storage
    useEffect(() => {
        const arr = JSON.parse(localStorage.getItem("todos"));
        if (arr && arr.length > 0) setTodoArr(arr);
    }, []);

    //set array to local storage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoArr));
    }, [todoArr]);

    return (
        <TodoProvider
            value={{ todoArr, addTodo, toggleDone, deleteTodo, updateTodo }}
        >
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                        Manage Your Todos
                    </h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todoArr.map((ele) => (
                            <div className="w-full" key={ele.id}>
                                <TodoItem todo={ele} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;
