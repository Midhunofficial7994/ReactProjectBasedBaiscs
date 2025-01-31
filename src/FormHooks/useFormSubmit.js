const useFormSubmit = (formData, validateForm, resetForm) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        console.log("Form data submitted: ", formData);
        resetForm();
      }
    };
  
    return { handleSubmit };
  };
  
  export default useFormSubmit;
  