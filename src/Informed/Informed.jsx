import React from "react";
import { Form, Debug } from "informed";
import InputField from "../InformedComponents/InputField";
import SelectField from "../InformedComponents/SelectField";
import CustomSelect from "../InformedComponents/CustomSelect";
import UseFormLogic from "../InformCustHook/UseFormLogic";
import { useTranslation } from "react-i18next";
import CustomCheckbox from "../InformedComponents/CustomCheckBox";
const InformedForm = () => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    countryOptions,
     nameValidator,
    pincodeValidator,
    validatePhone,
    file, 
    fileError,
    handleFileChange,
  } = UseFormLogic(t);

  const checkboxOptions = [
    { value: "cricket", label: "Cricket" },
    { value: "football", label: "Football" },
    { value: "badminton", label: "Badminton" },
  ];

  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };                     

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="p-4 border rounded shadow bg-white"
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "rgb(162,225,16)",
          background:
          "linear-gradient(38deg, rgba(162,225,16,1) 0%, rgba(141,96,46,1) 0%, rgba(16,217,47,1) 62%, rgba(16,225,137,1) 73%, rgba(67,218,18,1) 79%, rgba(36,61,154,1) 97%, rgba(1,102,139,1) 100%)",
        }}
      >
        <h3 className="text-center mb-4">{t("formTitle")}</h3>
        <div className="text-end mb-3">
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="form-select form-select-sm"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="ta">தமிழ்</option>
            <option value="ml">മലയാളം</option>
          </select>
        </div>

        <Form onSubmit={handleSubmit} focusOnInvalid={true}>
          <InputField
            name="firstName"
            label={t("firstName")}
            placeholder={t("firstName")}
            validate={nameValidator}
            required={t("nameRequired")}
          />
          <InputField
            name="lastName"
            label={t("lastName")}
            placeholder={t("lastName")}
            validate={nameValidator}
            required={t("nameRequired")}
          />
          <InputField
            name="street"
            label={t("street")}
            placeholder={t("street")}
            required
          />
          <InputField name="city" label={t("city")} placeholder="city" />
          <InputField
            name="pincode"
            label={t("pincode")}
            placeholder={t("pincode")}
            validate={pincodeValidator}
            required
          />
          <InputField
            name="phone"
            label={t("phone")}
            placeholder={t("phone")}
            type="tel"
            required
            validate={validatePhone}
            formatter="+91 ###-###-####"
          />

          <SelectField
            name="country"
            label={t("country")}
            options={countryOptions}
            defaultValue=""
            placeholder={t("selectCountry")}
          />

          <CustomSelect
            field="state"
            label={t("state")}
            validate={(value) => (!value ? t("stateRequired") : undefined)}
          />

          <div className="mb-3">
            <label className="mb-2">{t("Upload your photo")}</label>
            <input
              type="file"
              name="photo"
              className="form-control"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
            {fileError && (
              <p className="text-sm text-red-500 mt-1">{fileError}</p>
            )}
            {file && (
              <p className="text-sm text-green-500 mt-1">
                Selected file: {file.name}
              </p>
            )}
          </div>

          <div className="mb-3">
            <label className="mb-2">{t("Preferences")}</label>
            <CustomCheckbox
              name="sports"
              options={checkboxOptions}  
            />
          </div>

          <InputField
            name="messages"
            label={t("messages")}
            placeholder={t("optionalMessage")}
          />
           <button type="submit" className="btn btn-primary w-100">
            {t("submit")}
          </button>
          <Debug />
        </Form>
      </div>
    </div>
  );
};

export default InformedForm;
