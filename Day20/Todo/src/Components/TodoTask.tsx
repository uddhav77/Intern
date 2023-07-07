import React, { ChangeEvent, useState } from "react";
import TodoItem from "../types/ToDoItems";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";

interface Props {
  task: TodoItem;
  completeTask(toDelete: string): void;
  handleComplete(id: number): void;
  handleEdit(id: number, editedValue: string): void;
  handleCancelEdit(id: number): void;
}

const TodoTask = ({
  task,
  completeTask,
  handleComplete,
  handleEdit,
  handleCancelEdit,
}: Props) => {
  const [editing, setEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(task.value);

  const taskStyle = task.completed ? { color: "green" } : {};

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedValue(e.target.value);
  };

  const handleSaveClick = (id: number) => {
    handleEdit(id, editedValue);
    setEditing(false);
  };

  const handleCancelClick = () => {
    setEditedValue(task.value);
    setEditing(false);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  return (
    <div className="flex justify-between gap-4 text-white text-2xl bg-sky-300 p-2 rounded-lg mt-4 shadow-xl">
      {editing ? (
        <input
          type="text"
          value={editedValue}
          onChange={handleInputChange}
          className="flex-1 bg-stone-100 p-2 rounded-lg text-black text-2xl shadow-xl border-2 border-blue-100"
        />
      ) : (
        <span
          style={taskStyle}
          onClick={() => setEditing(true)}
          className={`flex-1 text-xl ${task.completed ? "line-through" : ""}`}
        >
          {editedValue}
        </span>
      )}
      <div>
        {!editing ? (
          <button onClick={handleEditClick} className=" p-2 rounded-lg ">
            <AiOutlineEdit className="text-blue-800" />
          </button>
        ) : (
          <div className="flex gap-2">
          <div className="">

            <button
              onClick={() => handleSaveClick(task.id)}
              className="bg-green-200 p-2 rounded-lg text-lg"
            >
              Save
            </button>
          </div>
          <div>

            <button
              onClick={handleCancelClick}
              className="bg-red-200 p-2 rounded-lg text-lg"
            >
              Cancel
            </button>
          </div>
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => completeTask(task.value)}
          className="flex items-center text-2xl"
        >
          <AiFillDelete className="text-red-800" />
        </button>
        <div className="flex items-center">
          <input
            type="checkbox"
            onClick={() => handleComplete(task.id)}
            className="h-8 w-4"
          />
        </div>
      </div>
    </div>
  );
};

export default TodoTask;
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
          <AiFillDelete className="text-red-700" />
        </button>
        <input type="checkbox" onClick={() => handleComplete(task.id)} className="h-8 w-4"/>
     
      </div>
    </div>
  );
};

export default TodoTask;
