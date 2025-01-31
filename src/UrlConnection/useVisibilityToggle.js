import { useState } from "react";

export const useVisibilityToggle = (initialCounts) => {
  const [visibleCounts, setVisibleCounts] = useState(initialCounts);

  const toggleVisibility = (categoryKey, filteredItems) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [categoryKey]:
        prev[categoryKey] === filteredItems.length ? initialCounts[categoryKey] : filteredItems.length,
    }));
  };

  return { visibleCounts, toggleVisibility };
};
