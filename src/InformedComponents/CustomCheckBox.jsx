import React from "react";
import { useField } from "informed";  
import { useTranslation } from "react-i18next";  

const CustomCheckbox = ({ name, options = [] }) => {
  const { t } = useTranslation(); 

  const { fieldState, fieldApi } = useField({
    name,  
    initialValue: [],  
  });

  const { value, error, showError } = fieldState;
  const { setValue } = fieldApi;

  const handleChange = (e) => {
    const newValue = e.target.value;
    const updatedValue = value.includes(newValue)
      ? value.filter((v) => v !== newValue)  
      : [...value, newValue];  

    setValue(updatedValue);  
  };

  return (  
    <div className="form-group">
      {options.map((option) => (
        <div className="form-check custom-checkbox" key={option.value}>
          <input          
            type="checkbox"
            name={name}
            value={option.value}
            checked={value.includes(option.value)}  
            onChange={handleChange}
            className="form-check-input"
          />
          <label className="form-check-label" htmlFor={option.value}>
            {t(option.label)}
          </label>
        </div>
      ))}
      {showError && <small style={{ color: "red" }}>{error}</small>}
    </div>
  );
};

export default CustomCheckbox;
