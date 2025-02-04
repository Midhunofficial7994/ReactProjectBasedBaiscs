import React, { useState } from 'react';
import { Form, useForm } from 'informed';
import { Card } from 'react-bootstrap';
import InputField from './InputField';  // Import the custom InputField component

// Utility function to format the phone number
const formatPhone = (phone) => {
  // Simple phone formatting logic (example format: (XXX) XXX-XXXX)
  const cleaned = ('' + phone).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};

const ContactForm = () => {
  const [file, setFile] = useState(null); // To store uploaded file


  // Handle file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  // Handle form submission
  const handleSubmit = (values) => {
    const formattedPhone = formatPhone(values.mobile); // Format the phone number

    // Log the form data with phone formatting and file handling
    if (file) {
      console.log("Form submitted:", { ...values, mobile: formattedPhone, uploadedFile: file });
    } else {
      console.log("Form submitted with no file:", { ...values, mobile: formattedPhone });
    }
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Contact Us</Card.Title>
        <Form onSubmit={handleSubmit}>
          <div className="mb-3">
            <InputField
              label="First Name"
              field="firstName"
              type="text"
              validate={(value) => !value && 'First name is required'}
            />
          </div>

          <div className="mb-3">
            <InputField
              label="Last Name"
              field="lastName"
              type="text"
            />
          </div>

          <div className="mb-3">
            <InputField
              label="Email"
              field="email"
              type="email"
              validate={(value) => !value && 'Email is required'}
            />
          </div>

          <div className="mb-3">
            <InputField
              label="Mobile"
              field="mobile"
              type="tel"
              validate={(value) => !value && 'Mobile number is required'}
            />
          </div>

          <div className="mb-3">
            <InputField
              label="Order Number"
              field="orderNumber"
              type="text"
            />
          </div>

          <div className="mb-3">
            <InputField
              label="Message"
              field="message"
              type="text"
              validate={(value) => !value && 'Message is required'}
            />
          </div>

          {/* File Upload Input */}
          <div className="mb-3">
            <label htmlFor="file-upload">Upload File</label>
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              className="form-control"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ContactForm;
