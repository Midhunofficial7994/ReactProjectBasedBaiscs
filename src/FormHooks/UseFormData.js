import { useState } from "react";

const useFormData = () => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError({
      
    })
  };

  return { formData, handleInputChange, setFormData };
};

export default useFormData;
