import React from 'react';
import { Select } from 'informed';

const   SelectField = ({ name, label, options, onChange, disabled = false, placeholder }) => (
  <div className="form-group mb-3">
    <label htmlFor={name}>{label}</label>
    <Select
      name={name}
      options={options}
      onChange={onChange}
      disabled={disabled}
      className="form-control"
      placeholder={placeholder}
    />
  </div>
);

export default SelectField;
