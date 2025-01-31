  import React from "react";

  const SelectedFilters = ({ selectedFilters, removeFilter }) => {
    return (
      <div className="mb-4">
        <h3>Selected Filters:</h3>
        <div className="d-flex flex-wrap gap-2">
          {Object.keys(selectedFilters).map((key) =>
            selectedFilters[key].map((subKey) => (
              <div key={`${key}-${subKey}`} className="badge bg-primary text-white d-flex align-items-center px-3 py-1 rounded">
                  <span>{subKey.replace(/_/g, " ")}</span>
                <button
                  className="btn btn-sm btn-light ms-2"
                  onClick={() => removeFilter(key, subKey)}
                  style={{ border: "none", background: "none", cursor: "pointer" }}
                >
                  <span style={{ fontSize: "16px", fontWeight: "bold" }}>×</span>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  export default SelectedFilters;
