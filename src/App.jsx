import { useState } from "react";
import { TodoForm, TodoItem } from "./components";
import { TodoProvider, useTodo } from "./context/TodoContext";
function App() {
    const [todoArr, setTodoArr] = useState([]);
    const addTodo = (title) => {
        setTodoArr((prev) => {
            title: title;
        });
    };

    return (
        <TodoProvider value={{ todoArr, addTodo }}>
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
                        <TodoItem />
                    </div>
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;
