import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { v4 as uuidv4 } from "uuid";

const TaskInput = () => {
    const [taskText, setTaskText] = useState("");
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (taskText.trim() === "") return;

        const newTask = {
            id: uuidv4(),
            text: taskText,
            completed: false,
        };

        dispatch(addTask(newTask));
        setTaskText("");
    };

    return (
        <div className="flex justify-start m-2 p-2 space-x-2">
            <input className="p-2 border-2 rounded-xl a-2 border-[#80808030] text-xl sm:min-w-96"
                type="text"
                placeholder="Enter a task..."
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button className="w-20 rounded-xl font-semibold bg-[#539e5629] text-[#539e56]" onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;
