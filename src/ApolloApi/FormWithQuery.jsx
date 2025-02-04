import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { Form as InformedForm } from 'informed';
import InputField from './InputField';
import { CONTACT_US_MUTATION } from './Mutation';

const GET_CONTACT_PAGE = gql`
  query GetContactPage {
    contactUsPage {
      title
      description
      meta_title
      meta_keywords
      meta_description
      right_side_content {
        type
        name
        street
        city
        id
        link
        link_label
        phone
        email
        socialLinks {
          id
          link
          svg_text
          title
        }
      }
    }
  }
`;

const Gbody = () => {
  const { loading, error, data } = useQuery(GET_CONTACT_PAGE); // Query for contact page
  const [contactUsMutation, { loading: mutationLoading, error: mutationError }] = useMutation(CONTACT_US_MUTATION);

  if (loading) return <div className="text-center p-5">Loading...</div>;
  if (error) return <div className="text-center p-5">Error: {error.message}</div>;

  const { contactUsPage } = data;

  // Render social media links
  const renderSocialLinks = (socialLinks) => {
    if (!socialLinks) return null;

    return (
      <div className="d-flex gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
            dangerouslySetInnerHTML={{ __html: social.svg_text }}
          />
        ))}
      </div>
    );
  };

  // Render different types of content (store, social media)
  const renderContent = (content) => {
    switch (content.type) {
      case 'store':
        return (
          <Card key={content.id} className="mb-4">
            <Card.Body>
              <Card.Title>{content.name}</Card.Title>
              <Card.Text>
                {content.street}<br />
                {content.city}<br />
                Phone: <a href={`tel:${content.phone}`}>{content.phone}</a><br />
                Email: <a href={`mailto:${content.email}`}>{content.email}</a>
              </Card.Text>
              {content.link && (
                <Card.Link href={content.link}>{content.link_label}</Card.Link>
              )}
            </Card.Body>
          </Card>
        );

      case 'social_media':
        return (
          <Card key={content.id} className="mb-4">
            <Card.Body>
              <Card.Title>{content.name}</Card.Title>
              {renderSocialLinks(content.socialLinks)}
            </Card.Body>
          </Card>
        );

      default:
        return null;
    }
  };

  // Generic validation function
  const validate = (value, type) => {
    if (!value || typeof value !== 'string' || !value.trim()) return 'This field is required';
    
    if (type === 'email') {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!regex.test(value)) return 'Invalid email address';
    }

    return undefined;
  };

  // Handle form submission
  const handleSubmit = async (values) => {
    const { firstName, lastName, email, phone, orderNumber, message } = values;

    try {
      const response = await contactUsMutation({
        variables: {
          request_type: 'General Inquiry',
          email,
          name: `${firstName} ${lastName}`,
          telephone: phone,
          orderNumber,
          comment: message,
          productSku: '',
        },
      });

      if (response.data.submitContactForm.success) {
        // You could display a success alert or change state to show a success message
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit the form: ' + response.data.submitContactForm.message);
      }
    } catch (error) {
      console.error('Mutation error:', error.message);
      alert('Error submitting the form: ' + error.message);
    }
  };

  return (
    <Container className="py-5">
      <Row>
        <Col lg={8}>
          <h1>{contactUsPage.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: contactUsPage.description }} className="mb-4" />

          <h2 className="mb-4">Contact Information</h2>

          <InformedForm onSubmit={handleSubmit}>
            {({ formState }) => (
              <>
                <Row className="mb-3">
                  <Col md={6}>
                    <InputField
                      label="First Name"
                      id="firstName"
                      name="firstName"
                      type="text"
                      validate={validate}
                    />
                  </Col>
                  <Col md={6}>
                    <InputField
                      label="Last Name"
                      id="lastName"
                      name="lastName"
                      type="text"
                      validate={validate}
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <InputField
                      label="Email"
                      id="email"
                      name="email"
                      type="email"
                      validate={(value) => validate(value, 'email')}
                    />
                  </Col>
                  <Col md={6}>
                    <InputField
                      label="Phone"
                      id="phone"
                      name="phone"
                      type="tel"
                    />
                  </Col>
                </Row>

                <InputField
                  label="Order Number"
                  id="orderNumber"
                  name="orderNumber"
                  type="text"
                />

                <InputField
                  label="Message"
                  id="message"
                  name="message"
                  type="text"
                  validate={validate}
                />

                <div className="text-end">
                  <button type="submit" className="btn btn-primary" disabled={mutationLoading}>
                    {mutationLoading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </>
            )}
          </InformedForm>
          {mutationError && <Alert variant="danger">{mutationError.message}</Alert>}
        </Col>

        <Col lg={4}>
          {contactUsPage.right_side_content.map((content) => renderContent(content))}
        </Col>
      </Row>
    </Container>
  );
};

export default Gbody;

