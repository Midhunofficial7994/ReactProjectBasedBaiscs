import { useSearchParams } from "react-router-dom";
import { getFilterFromSearchParams } from "./filters";

export const useFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = getFilterFromSearchParams(searchParams);

  const handleFilterChange = (event, category, subKey) => {
    const params = new URLSearchParams(searchParams);
    if (event.target.checked) {
      params.set(subKey, "true");
    } else {
      params.delete(subKey);
    }
    setSearchParams(params);
  };

  const clearFilters = () => setSearchParams({});
  const removeFilter = (key, subKey) => {
    const params = new URLSearchParams(searchParams);
    params.delete(subKey);
    setSearchParams(params);
  };

  return {
    filters,
    handleFilterChange,
    clearFilters,
    removeFilter,
  };
};
