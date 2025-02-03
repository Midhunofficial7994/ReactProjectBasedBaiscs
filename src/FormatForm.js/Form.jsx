import React, { useState } from "react";
import { IntlProvider, FormattedMessage, useIntl } from "react-intl";
import { messages } from "./messages";

function FormatForm() {
  const [language, setLanguage] = useState("en");
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <div className="App"> 
        <div className="language-selector">
          <select onChange={handleLanguageChange} value={language}>
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>
        <Form />
      </div>
    </IntlProvider>
  );
}

function Form() {
  const { formatMessage } = useIntl();
  return (             
    <div className="form-container">
       <h1>
        <FormattedMessage id="firstName" defaultMessage="First Name" />
      </h1>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">
            {formatMessage({ id: "firstName", defaultMessage: "First Name" })}
          </label>
          <input type="text" id="firstName" name="firstName" />
        </div>    

        <div className="form-group">
          <label htmlFor="lastName">
            {formatMessage({ id: "lastName", defaultMessage: "Last Name" })}
          </label>
          <input type="text" id="lastName" name="lastName" />
        </div>

        <div className="form-group">
          <label htmlFor="street">
            {formatMessage({ id: "street", defaultMessage: "Street" })}
          </label>
          <input type="text" id="street" name="street" />
        </div>

        <div className="form-group">
          <label htmlFor="city">
            {formatMessage({ id: "city", defaultMessage: "City" })}   
          </label>
          <input type="text" id="city" name="city" />
        </div>

        <div className="form-group">
          <label htmlFor="pincode">
            {formatMessage({ id: "pincode", defaultMessage: "Pincode" })}                                                        
          </label>
          <input type="text" id="pincode" name="pincode" />
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            {formatMessage({ id: "phone", defaultMessage: "Phone Number" })}
          </label>
          <input type="tel" id="phone" name="phone" />
        </div>

        <div className="form-group">
          <label htmlFor="country">
            {formatMessage({    
              id: "selectCountry",
              defaultMessage: "Select Country",
            })}
          </label>
          <select id="country" name="country">
            <option value="us">USA</option>
            <option value="fr">France</option>
            <option value="in">India</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="state">
            {formatMessage({
              id: "selectState",
              defaultMessage: "Select State",
            })}
          </label>
          <select id="state" name="state">
            <option value="california">California</option>
            <option value="texas">Texas</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="preferences">
            {formatMessage({
              id: "preferences",
              defaultMessage: "Preferences",
            })}
          </label>
          <input type="text" id="preferences" name="preferences" />
        </div>

        <div className="form-group">
          <label htmlFor="photo">
            {formatMessage({
              id: "uploadPhoto",
              defaultMessage: "Upload your photo",
            })}
          </label>
          <input type="file" id="photo" name="photo" />
        </div>

        <button type="submit">
          {formatMessage({ id: "submit", defaultMessage: "Submit" })}
        </button>
      </form>
    </div>
  );
}

export default FormatForm;
