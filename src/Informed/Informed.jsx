import React from 'react';
import { Form, Debug } from 'informed';
import { useIntl } from 'react-intl';
import InputField from '../InformedComponents/InputField';
import SelectField from '../InformedComponents/SelectField';
import CustomSelect from '../InformedComponents/CustomSelect';
import UseFormLogic from '../InformCustHook/UseFormLogic';
import CustomCheckbox from '../InformedComponents/CustomCheckBox';

const InformedForm = () => {
  const intl = useIntl();
  const {
    handleSubmit,
    countryOptions,
    nameValidator,
    pincodeValidator,
    validatePhone,
    file,
    fileError,
    handleFileChange,
  } = UseFormLogic(intl.formatMessage);

  const checkboxOptions = [
    { value: 'cricket', label: 'Cricket' },
    { value: 'football', label: 'Football' },
    { value: 'badminton', label: 'Badminton' },
  ];

  const changeLanguage = (lang) => {
    // Manually update the language if needed, but usually handled via context in IntlProvider
    intl.locale = lang;
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <div
        className="p-4 border rounded shadow bg-white"
        style={{
          width: '100%',
          maxWidth: '500px',
          background: 'rgb(162,225,16)',
          background: 'linear-gradient(38deg, rgba(162,225,16,1) 0%, rgba(141,96,46,1) 0%, rgba(16,217,47,1) 62%, rgba(16,225,137,1) 73%, rgba(67,218,18,1) 79%, rgba(36,61,154,1) 97%, rgba(1,102,139,1) 100%)',
        }}
      >
        <h3 className="text-center mb-4">{intl.formatMessage({ id: 'formTitle' })}</h3>
        <div className="text-end mb-3">
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            className="form-select form-select-sm"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="ta">தமிழ்</option>
          </select>
        </div>

        <Form onSubmit={handleSubmit} focusOnInvalid={true}>
          <InputField
            name="firstName"
            label={intl.formatMessage({ id: 'firstName' })}
            placeholder={intl.formatMessage({ id: 'firstName' })}
            validate={nameValidator}
            required={intl.formatMessage({ id: 'nameRequired' })}
          />
          <InputField
            name="lastName"
            label={intl.formatMessage({ id: 'lastName' })}
            placeholder={intl.formatMessage({ id: 'lastName' })}
            validate={nameValidator}
            required={intl.formatMessage({ id: 'nameRequired' })}
          />
          <InputField
            name="street"
            label={intl.formatMessage({ id: 'street' })}
            placeholder={intl.formatMessage({ id: 'street' })}
            required
          />
          <InputField name="city" label={intl.formatMessage({ id: 'city' })} placeholder="city" />
          <InputField
            name="pincode"
            label={intl.formatMessage({ id: 'pincode' })}
            placeholder={intl.formatMessage({ id: 'pincode' })}
            validate={pincodeValidator}
            required
          />
          <InputField
            name="phone"
            label={intl.formatMessage({ id: 'phone' })}
            placeholder={intl.formatMessage({ id: 'phone' })}
            type="tel"
            required
            validate={validatePhone}
            formatter="+91 ###-###-####"
          />

          <SelectField
            name="country"
            label={intl.formatMessage({ id: 'country' })}
            options={countryOptions}
            defaultValue=""
            placeholder={intl.formatMessage({ id: 'selectCountry' })}
          />

          <CustomSelect
            field="state"
            label={intl.formatMessage({ id: 'state' })}
            validate={(value) => (!value ? intl.formatMessage({ id: 'stateRequired' }) : undefined)}
          />

          <div className="mb-3">
            <label className="mb-2">{intl.formatMessage({ id: 'Upload your photo' })}</label>
            <input
              type="file"
              name="photo"
              className="form-control"
              accept="image/*"
              onChange={handleFileChange}
              required
            />
            {fileError && <p className="text-sm text-red-500 mt-1">{fileError}</p>}
            {file && <p className="text-sm text-green-500 mt-1">Selected file: {file.name}</p>}
          </div>

          <div className="mb-3">
            <label className="mb-2">{intl.formatMessage({ id: 'Preferences' })}</label>
            <CustomCheckbox name="sports" options={checkboxOptions} />
          </div>

          <InputField
            name="messages"
            label={intl.formatMessage({ id: 'messages' })}
            placeholder={intl.formatMessage({ id: 'optionalMessage' })}
          />

          <button type="submit" className="btn btn-primary w-100">
            {intl.formatMessage({ id: 'submit' })}
          </button>
          <Debug />
        </Form>
      </div>
    </div>
  );
};

export default InformedForm;
