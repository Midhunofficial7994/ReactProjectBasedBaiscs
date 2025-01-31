import { useState } from "react";

const useDeleteModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const openModal = (taskId) => {
    setTaskToDelete(taskId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTaskToDelete(null);
  };

  const confirmDelete = (onDelete) => {
    if (taskToDelete) {
      onDelete(taskToDelete); 
    }
    closeModal(); 
  };

  return {
    showModal,
    openModal,
    closeModal,
    confirmDelete,
  };
};

export default useDeleteModal;
