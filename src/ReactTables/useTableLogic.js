// useTableLogic.js
import { useState, useMemo } from "react";

const useTableLogic = (initialData) => {
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const filteredData = useMemo(() => 
    data.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ), 
    [data, searchTerm]  
  );

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((user) => user.id !== id));
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleSave = (form) => {
    form.validateFields().then((values) => {
      setData((prevData) =>
        prevData.map((user) =>
          user.id === editingUser.id ? { ...user, ...values } : user
        )
      );
      setIsModalOpen(false);
      setEditingUser(null);
    });
  };

  return {
    data: filteredData,
    searchTerm,
    setSearchTerm,
    pagination,
    setPagination,
    editingUser,
    isModalOpen,
    setIsModalOpen,
    handleDelete,
    handleEdit,
    handleSave,
  };
};

export default useTableLogic;
