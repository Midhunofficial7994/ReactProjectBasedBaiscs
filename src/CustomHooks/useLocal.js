import { useEffect, useState } from "react";

const useLocal = () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(storedTasks);

  const handleAddTask = (taskInput) => {
    const newTask = {
      id: Date.now(),
      text: taskInput.trim(),
      isCompleted: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return { tasks, handleAddTask, handleDeleteTask };
};

export default useLocal;
