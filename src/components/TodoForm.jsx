import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
    const { addTodo } = useTodo();

    const [title, setTitle] = useState("");

    const add = (e) => {
        e.preventDefault();
        if (!title) return;
        addTodo({ title, id: Date.now(), done: false });
        setTitle("");
    };

    return (
        <form className="flex" onSubmit={(e) => add(e)}>
            <input
                type="text"
                placeholder="Write Todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button
                type="submit"
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            >
                Add
            </button>
        </form>
    );
}
export default TodoForm;
