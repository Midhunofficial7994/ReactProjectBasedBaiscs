import { useState } from "react";
import states from "../State";

const useFormValidation = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    country: "",
    pincode: "",
    state: "",
    district: "",
    messages: "",
    phone: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [districts, setDistricts] = useState([]);
  const validators = {
    firstName: (value) => {
      if (!value || !/^[a-zA-Z\s]+$/.test(value)) {
        return "First name is required and cannot contain special characters.";
      }
      return null;
    },
    lastName: (value) => {
      if (!value || !/^[a-zA-Z\s]+$/.test(value)) {
        return "Last name is required and can only contain letters and spaces.";
      }
      return null;
    },
    phone: (value) => {
      if (!value) {
        return "Phone number is required.";
      }
      if (!/^\d{10}$/.test(value)) {
        return "Phone number must be exactly 10 digits.";
      }
      return null;
    },
    pincode: (value) => {
      if (!value || !/^\d{6}$/.test(value)) {
        return "Pincode is required and must be a 6-digit number.";
      }
      return null;
    },
    street: (value) => {
      if (!value) {
        return "Street is required.";
      }
      return null;
    },
    state: (value) => {
      if (!value) {
        return "State is required.";
      }
      return null;
    },
    district: (value) => {
      if (!value) {
        return "District is required.";
      }
      return null;
    },
  };

const handleInputChange = (e) => {
  const { name, value } = e.target;

  // If the field is a select (state or district), handle it properly
  if (name === 'state' || name === 'district') {
    // For react-select, `value` will be an object with 'value' and 'label'
    const selectedValue = value ? value.value : ''; // Extract the value
    setFormData((prevState) => ({
      ...prevState,
      [name]: selectedValue,
    }));

    // Update districts when state changes
    if (name === 'state') {
      const selectedState = states.states.find((state) => state.state === selectedValue);
      setDistricts(selectedState ? selectedState.districts : []);
    }

    // Validate the selected field
    if (validators[name]) {
      const error = validators[name](selectedValue);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
  } else {
    // Handle regular inputs
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (validators[name]) {
      const error = validators[name](value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
  }
};

  // Validate all fields at once
  const validate = () => {
    let hasError = false;
    const newErrors = {};

    // Loop through validators for all fields
    Object.keys(validators).forEach((field) => {
      const error = validators[field](formData[field]);
      if (error) {
        newErrors[field] = error;
        hasError = true;
      }
    });

    setErrors(newErrors);
    return !hasError;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form data submitted: ", formData);

      setFormData(initialFormData);
      setErrors({});
      setDistricts([]);
    }
  };

  // Return necessary values and methods
  return {
    formData,
    errors,
    handleInputChange,
    handleSubmit,
    districts,
    validate,
    setFormData,
  };
};

export default useFormValidation;
