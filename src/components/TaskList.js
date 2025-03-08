import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);

    if (tasks.length === 0) {
        return <p className="m-4 font-semibold text-[#489c4b] text-lg md:text-xl lg:text-2xl">No tasks available. Add some tasks!</p>;
    }

    return (
        <ul className="mb-10">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
};

export default TaskList;
