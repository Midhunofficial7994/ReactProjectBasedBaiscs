import { useState } from "react";
  
export const useSearchInputs = () => {
  const [searchInputs, setSearchInputs] = useState({ category: "", ram: "", storage: "" });

  const handleSearchChange = (field) => (event) => {
    setSearchInputs((prev) => ({ ...prev, [field]: event.target.value }));
  };

  return { searchInputs, handleSearchChange };
};
