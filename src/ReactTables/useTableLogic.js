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
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const filteredData = useMemo(() => 
    data.filter((item) =>
      Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ), 
    [data, searchTerm]  
  );

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;

    const sorted = [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [filteredData, sortConfig]);

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

  const handleSort = (key) => {
    setSortConfig((prevState) => {
      const newDirection = prevState.key === key && prevState.direction === 'asc' ? 'desc' : 'asc';
      return { key, direction: newDirection };
    });
  };

  return {
    data: sortedData,
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
    handleSort,  
  };
};

export default useTableLogic;
