import { useState } from "react";

const useValidation = (formData) => {
  const [errors, setErrors] = useState({});

  // Validators for each field
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
    street: (value) => {
      if (!value) {
        return "Street is required.";
      }
      return null;
    },
    pincode: (value) => {
      if (!value || !/^\d{6}$/.test(value)) {
        return "Pincode is required and must be a 6-digit number.";
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
    phone: (value) => {
      if (!value) {
        return "Phone number is required.";
      } else if (!/^\d{10}$/.test(value)) {
        return "Phone number must be exactly 10 digits and contain only numbers.";
      }
      return null;
    },
  };

  // Validate individual field
  const handleFieldValidation = (name, value) => {
    if (validators[name]) {
      const error = validators[name](value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
  };

  // Validate all fields
  const validateForm = () => {
    let hasError = false;
    const newErrors = {};
    
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

  return { errors, validateForm, handleFieldValidation };
};

export default useValidation;
