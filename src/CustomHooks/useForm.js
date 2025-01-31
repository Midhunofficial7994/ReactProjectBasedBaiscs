import { useState } from "react";

const useForm = (handleAddTask, task) => {
  const [taskInput, setTaskInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);  

  const handleChange = (e) => {
    setTaskInput(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!taskInput.trim()) {
      setError("Please enter a valid task.");
      return;
    }

    const isDuplicate = task.some((ele) => ele.text === taskInput);
    if (isDuplicate) {
      setError("This task already exists");
      return;
    }

    setLoading(true);  
    try {
      await handleAddTask(taskInput.trim()); 
      setTaskInput("");
      setError("");
    } catch (err) {
      console.error("Error adding task:", err);
      setError("Error adding task. Please try again.");
    } finally {
      setLoading(false);  
    }
  };
  
  return { taskInput, handleChange, handleSubmit, error, loading }; 
};

export default useForm;
