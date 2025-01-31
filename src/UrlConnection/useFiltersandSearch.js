import { useState } from "react";
import { filterData } from "./filters";

export const useFiltersAndSearch = () => {
  const [filters, setFilters] = useState({
    Category: {},
    Ram: {},
    Storage: {},
  });

  const [searchInputs, setSearchInputs] = useState({
    category: "",
    ram: "",
    storage: "",
  });
  const [visibleCounts, setVisibleCounts] = useState({
    category: 4,
    ram: 4,
    storage: 4,
  });

  const handleSearchChange = (type) => (e) => {
    setSearchInputs((prev) => ({ ...prev, [type]: e.target.value }));
  };

  const handleFilterChange = (e, filterType, item) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: {
        ...prev[filterType],
        [item]: e.target.checked,
      },
    }));
  };

  const clearFilters = () => {
    setFilters({
      Category: {},
      Ram: {},
      Storage: {},
    });
  };

  const removeFilter = (filterType, item) => {
    setFilters((prev) => {
      const newFilters = { ...prev[filterType] };
      delete newFilters[item];
      return { ...prev, [filterType]: newFilters };
    });
  };

  const toggleVisibility = (filterType, filteredItems) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [filterType]:
        prev[filterType] === filteredItems.length ? 4 : filteredItems.length,
    }));
  };

  const filteredCategories = Object.keys(filterData.Category).filter(
    (category) =>
      category.toLowerCase().includes(searchInputs.category.toLowerCase())
  );
  const filteredRams = Object.keys(filterData.Ram).filter((ram) =>
    ram.toLowerCase().includes(searchInputs.ram.toLowerCase())
  );
  const filteredStorages = Object.keys(filterData.Storage).filter((storage) =>
    storage.toLowerCase().includes(searchInputs.storage.toLowerCase())
  );

  const selectedFilters = Object.keys(filterData).reduce((acc, key) => {
    const selectedSubFilters = Object.keys(filterData[key])
      .filter((subKey) => filters[key][subKey])
      .map((subKey) => subKey);

    if (selectedSubFilters.length > 0) {
      acc[key] = selectedSubFilters;
    }
    return acc;
  }, {});

  return {
    filters,
    searchInputs,
    visibleCounts,
    clearFilters,
    removeFilter,
    handleFilterChange,
    handleSearchChange,
    toggleVisibility,
    filteredCategories,
    filteredRams,
    filteredStorages,
    selectedFilters,
  };
};
