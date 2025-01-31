import React from "react";
import { Row, Col, InputGroup, FormControl, Form } from "react-bootstrap";
import InputField from "../FormComponents/InputField";
import SelectField from '../FormComponents/SelectField'
import SubmitButton from "../FormComponents/SubmitButton";
import useFormValidation from "../CustomHooks/useFormValidation";
import states from "../State";

const styles = {
  container: { backgroundColor: "#f0f0f0", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" },
  formContainer: {
    maxWidth: "800px",
    padding: "15px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
};

const FormRow = ({ children }) => (
  <Row className="mb-1">
    <Col md={12}>{children}</Col>
  </Row>
);

const FormValidation = () => {
  const { formData, errors, handleInputChange, handleSubmit, districts } = useFormValidation();

  const stateOptions = states.states.map((state) => ({
    value: state.state,
    label: state.state,
  }));

  const districtOptions = districts.map((district) => ({
    value: district,
    label: district,
  }));

  return (
    <div style={styles.container}>
      <div className="container" style={styles.formContainer}>
        <h2 style={styles.heading}>Form Submission</h2>
        <form onSubmit={handleSubmit}>
          <FormRow>
            <InputField
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              isInvalid={!!errors.firstName}
              errorMessage={errors.firstName}
            />
          </FormRow>

          <FormRow>
            <InputField
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              isInvalid={!!errors.lastName}
              errorMessage={errors.lastName}
            />
          </FormRow>

          <FormRow>
            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <InputGroup>
                <InputGroup.Text>+91</InputGroup.Text>
                <FormControl
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  isInvalid={!!errors.phone}
                  placeholder="Enter phone number"
                  maxLength={10}
                />
              </InputGroup>
              {errors.phone && (
                <Form.Control.Feedback type="invalid">
                  {errors.phone}
                </Form.Control.Feedback>
              )}
            </Form.Group>
          </FormRow>

          <FormRow>
            <InputField
              type="text"
              name="street"
              value={formData.street}
              onChange={handleInputChange}
              isInvalid={!!errors.street}
              errorMessage={errors.street}
            />
          </FormRow>

          <FormRow>
            <InputField
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </FormRow>

          <FormRow>
            <SelectField
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              options={[{ label: "India", value: "India" }]}
              isInvalid={!!errors.country}
            />
          </FormRow>

          <FormRow>
            <InputField
              type="number"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              isInvalid={!!errors.pincode}
              errorMessage={errors.pincode}
            />
          </FormRow>

          <FormRow>
            <SelectField
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              options={stateOptions}
              isInvalid={!!errors.state}
              errorMessage={errors.state}
            />
          </FormRow>

          <FormRow>
            <SelectField
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              options={districtOptions}
              isInvalid={!!errors.district}
              errorMessage={errors.district}
              disabled={!formData.state}
            />
          </FormRow>

          <FormRow>
            <InputField
              type="textarea"
              name="messages"
              value={formData.messages}
              onChange={handleInputChange}
              as="textarea"
            />
          </FormRow>

          <FormRow>
            <div className="d-flex justify-content-center">
              <SubmitButton>Submit</SubmitButton>
            </div>
          </FormRow>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
