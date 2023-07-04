import React from "react";
import TodoItem from "../types/ToDoItems";
import { AiFillDelete } from "react-icons/ai";
import { ImCheckboxChecked } from "react-icons/im";

interface Props {
  task: TodoItem;
  completeTask(toDelete: string): void;
  handleComplete(id: number): void;
}

const TodoTask = ({ task, completeTask, handleComplete }: Props) => {
  const taskStyle = task.completed ? { color: "green" } : {};

  return (
    <div className="flex justify-between text-white text-2xl bg-sky-300 p-2 rounded-lg mt-4 shadow-xl">
      <span style={taskStyle}>{task.value}</span>
      <div className="flex gap-2">
        <button
          onClick={() => completeTask(task.value)}
          className="flex items-center text-2xl"
        >
          <AiFillDelete className="text-red-800" />
        </button>
        <input type="checkbox" onClick={() => handleComplete(task.id)} className="h-8 w-4"/>
    
      </div>
    </div>
  );
};

export default TodoTask;
