import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterGroup from "./FilterGroup";
import SelectedFilters from "./SelectFilters";
import { filterData } from "../UrlConnection/filters";
import {useFilter} from './useFilter'
import { useVisibilityToggle } from "./useVisibilityToggle";
import { useSearchInputs } from "./useSearchInputs";

function UrlSearch() {
  const { filters, handleFilterChange, clearFilters, removeFilter } = useFilter();
  const { searchInputs, handleSearchChange } = useSearchInputs();
  const { visibleCounts, toggleVisibility } = useVisibilityToggle({ category: 4, ram: 4, storage:4  });

  const filteredCategories = Object.keys(filterData.Category).filter((category) =>
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

  return (
    <div className="container mt-5">
      <div className="row justify-content-center mb-4">
        <div className="col-12 text-center">
          <div className="alert alert-info" style={bannerStyle}>
            <h1 className="text-white">🌟 Special Offer 🌟</h1>
            <p className="lead text-white">Hurry! Limited Time Offer, Closes Soon....</p>
          </div>
        </div>
      </div>

      <div className="row mb-4 justify-content-between align-items-center">
        <div className="col-md-8">
          <button className="btn btn-outline-danger" onClick={clearFilters}>
            <i className="fas fa-trash-alt"></i> Clear Filters
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <div className="card shadow-lg mb-4 border-light">
            <div className="card-header text-white" style={cardHeaderStyle}>
              <h5 className="mb-0">Selected Filters</h5>
            </div>
            <div className="card-body">
              <SelectedFilters selectedFilters={selectedFilters} removeFilter={removeFilter} />
            </div>
          </div>
        </div>

        <div className="col-md-9">
          <div className="card shadow-lg mb-4 border-light">
            <div className="card-header text-white" style={cardHeaderStyle}>
              <h5 className="mb-0">Filters</h5>
            </div>
            <div className="card-body">

              <FilterSection
                title="Categories"
                searchValue={searchInputs.category}
                handleSearch={handleSearchChange("category")}
                filteredItems={filteredCategories}
                visibleCount={visibleCounts.category}
                toggleVisibility={() => toggleVisibility("category", filteredCategories)}
                handleFilterChange={handleFilterChange}
                filterType="Category"
                filters={filters.Category}
              />

              <FilterSection
                title="RAM"
                searchValue={searchInputs.ram}
                handleSearch={handleSearchChange("ram")}
                filteredItems={filteredRams}
                visibleCount={visibleCounts.ram}
                toggleVisibility={() => toggleVisibility("ram", filteredRams)}
                handleFilterChange={handleFilterChange}
                filterType="Ram"
                filters={filters.Ram}
              />

              <FilterSection
                title="Storage"
                searchValue={searchInputs.storage}
                handleSearch={handleSearchChange("storage")}
                filteredItems={filteredStorages}
                visibleCount={visibleCounts.storage}
                toggleVisibility={() => toggleVisibility("storage", filteredStorages)}
                handleFilterChange={handleFilterChange}
                filterType="Storage"
                filters={filters.Storage}
              />

              {Object.keys(filterData)
                .filter((key) => !["Category", "Ram", "Storage"].includes(key))
                .map((key) => (
                  <FilterGroup
                    key={key}
                    title={key}
                    filters={filters[key]}
                    handleFilterChange={handleFilterChange}
                  />
                ))}   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FilterSection = ({title,searchValue, handleSearch,filteredItems,visibleCount,toggleVisibility,handleFilterChange,filterType,filters,}) => (
  <>
    <h5>{title}</h5>
    <input
      type="text"
      placeholder={`Search ${title.toLowerCase()}`}
      className="form-control mb-3"
      value={searchValue}
      onChange={handleSearch}
    />
    <div className="list-group">
      {filteredItems.slice(0, visibleCount).map((item) => {
        const isChecked = filters[item];
        return (
          <label key={item} className="list-group-item">
            <input type="checkbox" checked={isChecked} onChange={(e) => handleFilterChange(e, filterType, item)} />
            {item}
          </label>
        );
      })}
      <div className="list-group-item text-center">
        <button className="btn btn-link" onClick={toggleVisibility}>
          {visibleCount === filteredItems.length ? (
            <>
              <i className="fas fa-arrow-up"></i> Show Less
            </>
          ) : (
            <>
              <i className="fas fa-arrow-down"></i> Show More
            </>
          )}
        </button>
      </div>
    </div>
  </>
);

const cardHeaderStyle = {
  background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 39%, rgba(0,212,255,1) 100%)",
  borderRadius: "10px 10px 0 0",
};

const bannerStyle = {
  background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 39%, rgba(0,212,255,1) 100%)",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  width: "100%",
  margin: "0",
};

export default UrlSearch;
