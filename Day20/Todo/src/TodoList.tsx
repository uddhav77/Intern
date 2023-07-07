import React, { ChangeEvent, FC, useState } from 'react';
import TodoItem from './types/ToDoItems';
import TodoTask from './Components/TodoTask';

const TodoList: FC = () => {
  const [task, setTask] = useState<string>('');
  const [todo, setTodo] = useState<TodoItem[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const addTask = (): void => {
    const newTask: TodoItem = {
      id: todo.length + 1,
      value: task,
      status: false,
      completed: false,
      editing: false,
      editedValue: '',
    };

    setTodo([...todo, newTask]);
    setTask('');
  };

  const completeTask = (toDelete: string): void => {
    setTodo(todo.filter((task) => {
      return task.value !== toDelete;
    }));
  };

  const handleComplete = (id: number): void => {
    setTodo(
      todo.map((task) => {
        if (task.id === id) {
          const updatedTask = {
            ...task,
            completed: !task.completed,
          };

          if (updatedTask.completed) {
            alert('Task Completed');
          }

          return updatedTask;
        }
        return task;
      })
    );
  };

  const handleEdit = (id: number, editedValue: string): void => {
    setTodo(
      todo.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            editedValue,
          };
        }
        return task;
      })
    );
  };

  const handleCancelEdit = (id: number): void => {
    setTodo(
      todo.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            editing: false,
            editedValue: '',
          };
        }
        return task;
      })
    );
  };

  const handleTaskClick = (id: number): void => {
    setTodo(
      todo.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            editing: true,
            editedValue: task.value,
          };
        }
        return task;
      })
    );
  };

  const handleSaveClick = (id: number): void => {
    setTodo(
      todo.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            value: task.editedValue,
            editing: false,
            editedValue: '',
          };
        }
        return task;
      })
    );
  };

  return (
    <div className='p-10 flex justify-center'>
      <div className='bg-red-100 p-10 rounded-xl'>
        <div className='text-4xl font-bold text-center text-white'>ToDo List</div>
        <div className='flex gap-2 mt-8'>
          <input
            type='text'
            name='task'
            placeholder='Add ToDo'
            className='bg-stone-100 p-2 rounded-lg text-2xl shadow-xl border-2 border-blue-100'
            value={task}
            onChange={handleChange}
          />
          <button className='bg-blue-200 p-2 rounded-lg shadow-xl' onClick={addTask}>
            Add Todo
          </button>
        </div>
        <div>
          {todo.map((task: TodoItem, key: number) => {
            return (
              <TodoTask
                task={task}
                key={key}
                completeTask={completeTask}
                handleComplete={handleComplete}
                handleEdit={handleEdit}
                handleCancelEdit={handleCancelEdit}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
