import React from "react";

const FilterGroup = ({ title, filters, handleFilterChange }) => {
  return (
    <div className="mb-4">
      <h2>{title}</h2>
      <div className="border p-3" style={{ backgroundColor: '#f1f1f1', borderRadius: '8px' }}>
        {Object.keys(filters).map((subKey) => (
          <div key={subKey} className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              checked={filters[subKey]}
              onChange={(event) => handleFilterChange(event, title, subKey)}
            />
            <label className="form-check-label">{subKey.replace(/_/g," ")}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;
