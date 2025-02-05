import { useIntl } from 'react-intl';

export const useFormHandlers = () => {
  const { formatMessage } = useIntl();
  const validateName = (value) => {
    if (!value) return "Field is required."; 
    if (/[^a-zA-Z]/.test(value)) return "Only letters are allowed.";
    if (value.length < 2) return "Value is too short.";
  };

  const validatePlace = (value) => {
    if (!value) return "Field is required.";
    if (value.trim() === "") return "Value cannot be just spaces.";
    if (value.length < 2) return "Value is too short.";
  };
  const validateEmail = (value) => {
    if (!value) return "Email is required.";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) return "Invalid email format.";
  };

  const validatePincode = (value) => {
    if (!value) return "Pincode is required.";
    if (value.length !== 6) return "Pincode must be exactly 6 digits.";
    if (!/^\d+$/.test(value)) return "Pincode should not contain characters other than numbers.";
  };

  const validateNumber = (value) => {
    if (!value) return "Number is required.";
    const sanitizedValue = value.replace("+91", "").replace(/\s/g, "");
    if (sanitizedValue.length !== 10) return "Number must be exactly 10 digits.";
    if (!/^\d+$/.test(sanitizedValue)) return "Number should not contain characters other than numbers.";
  };

  const validateForm = (formData) => {
    const { city, country, district, firstName, lastName, phoneNumber, pincode, state, street } = formData;

    const nameError = validateName(firstName) || validateName(lastName);
    if (nameError) return false;

    const placeError = validatePlace(city) || validatePlace(district) || validatePlace(street);
    if (placeError) return false;

    const pincodeError = validatePincode(pincode);
    if (pincodeError) return false;

    const phoneNumberError = validateNumber(phoneNumber);
    if (phoneNumberError) return false;

    if (!country || country.trim() === "") return false;
    if (!state || state.trim() === "") return false;

    return true;
  };

  return {
    validateName,
    validatePincode,
    validatePlace,
    validateNumber,
    validateForm,
    validateEmail
  };
};
