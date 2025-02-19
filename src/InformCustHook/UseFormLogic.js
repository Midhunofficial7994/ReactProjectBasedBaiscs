import { useState } from "react";

const nameValidator = (value) => {
  const namePattern = /^[A-Za-z\s]+$/;
  return !value || !namePattern.test(value)
    ? "Only letters and spaces are allowed."
    : undefined;
};

const pincodeValidator = (value) => {
  const pincodePattern = /^[0-9]{6}$/;
  return value && !pincodePattern.test(value.trim())
    ? "Please enter a valid 6-digit pincode."
    : undefined;
};
const validatePhone = (value) => {
  const phonePattern = /^\+91\s?\d{3}-\d{3}-\d{4}$/;
  return phonePattern.test(value)
    ? undefined
    : "Invalid phone number. Please use the format +91 ###-###-####.";
};


const UseFormLogic = () => {
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");

  const countryOptions = [{ value: "India", label: "India" }];

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];

    if (uploadedFile) {
      if (uploadedFile.size > 500 * 1024) {
        setFileError("File size exceeds 500KB. Please upload a smaller file.");
        setFile(null);
      } else {
        setFileError("");
        setFile(uploadedFile);
      }
    }
  };

  const formatPhone = (phone) => {
    if (!phone) return "";
    return phone.replace(/[^\d\+]/g, "");
  };

  const handleSubmit = (values) => {
    const formattedPhone = formatPhone(values.phone);

    if (file) {
      console.log("Form submitted:", { ...values, phone: formattedPhone, uploadedFile: file });
    } else {
      console.log("Form submitted with no file:", { ...values, phone: formattedPhone });
    }
  };
  return {
    handleSubmit,
    countryOptions,
    nameValidator,
    pincodeValidator,
    validatePhone,
    file,
    fileError,
    handleFileChange,
  };
};

export default UseFormLogic;
