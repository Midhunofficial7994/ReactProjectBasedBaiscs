import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
};

const useDatabase = () => {
  const {
    data: tasks,
    error,
    mutate,
  } = useSWR("http://localhost:5000/api/todos", fetcher);

  const handleAddTask = async (taskInput) => {
    const newTask = {
      text: taskInput.trim(),
      isCompleted: false,
    };

    try {
      const response = await fetch("http://localhost:5000/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) throw new Error("Failed to add task");

      const createdTask = await response.json();
      mutate((currentTasks) => [...currentTasks, createdTask], false);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete task");
      mutate(
        (currentTasks) => currentTasks.filter((task) => task._id !== id),
        false
      );
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return { tasks: tasks || [], handleAddTask, handleDeleteTask, error };
};

export default useDatabase;

// import useSWR from 'swr';
// import axios from 'axios';

// const fetcher = (url) => axios.get(url).then((res) => res.data);

// const useDatabase = () => {

//   const { data: tasks, error, mutate } = useSWR("http://localhost:5000/api/todos", fetcher);

//   if (error) {
//     console.error("Error fetching tasks:", error);
//     return { tasks: [], isLoading: false, error };
//   }

//   if (!tasks) {
//     return { tasks: [], isLoading: true, error: null };
//   }

//   const handleAddTask = async (taskInput) => {
//     const newTask = {
//       text: taskInput.trim(),
//       isCompleted: false,
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/todos",
//         newTask
//       );
//       mutate();
//     } catch (error) {
//       console.error("Error adding task:", error);
//     }
//   };

//   const handleDeleteTask = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/todos/${id}`);

//       mutate();
//     } catch (error) {
//       console.error("Error deleting task:", error);
//     }
//   };

//   return { tasks, handleAddTask, handleDeleteTask };
// };

// export default useDatabase;
