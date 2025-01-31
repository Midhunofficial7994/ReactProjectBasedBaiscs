import React from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select'; // Import react-select

const SelectField = ({ name, value, onChange, isInvalid, errorMessage, options, disabled }) => {
  const handleSelectChange = (selectedOption) => {
    onChange({
      target: {
        name,
        value: selectedOption, // Pass the entire selected object to handleInputChange
      },
    });
  };

  return (
    <Form.Group controlId={name}>
      <Form.Label>{name.charAt(0).toUpperCase() + name.slice(1)}</Form.Label>

      {/* Use react-select instead of the default select */}
      <Select
        name={name}
        value={options ? options.find((option) => option.value === value) : null} // Match the selected value
        onChange={handleSelectChange} // Handle onChange correctly
        options={options} // Pass the options array
        isInvalid={isInvalid} // Set validation state
        isDisabled={disabled} // Disable if necessary (e.g., for district)
        placeholder={`Select ${name.charAt(0).toUpperCase() + name.slice(1)}`}
      />

      {/* Show error message */}
      {isInvalid && <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>}
    </Form.Group>
  );
};


export default SelectField;
