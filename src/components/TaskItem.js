import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTaskCompletion } from "../redux/taskSlice";
import dele from "../assets/delete.png";

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    return (
        <li className="flex justify-between items-center text-lg md:text-2xl m-3 h-20 text-[#1B281B] border-y-2 border-[#1B281B30]" style={{ textDecoration: task.completed ? "line-through" : "none" }}>

            <span className="ml-3 md:ml-10" onClick={() => dispatch(toggleTaskCompletion(task.id))}>
                {task.text}
            </span>
            <button onClick={() => dispatch(deleteTask(task.id))}><img src={dele} alt="Delete" className="h-6 w-5 mr-4 md:mr-10 " /></button>
        </li>
    );
};

export default TaskItem;
