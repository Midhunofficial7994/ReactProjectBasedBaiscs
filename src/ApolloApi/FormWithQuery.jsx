import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { Container, Row, Col } from 'react-bootstrap';
import { Form } from 'informed';
import { useTranslation } from 'react-i18next';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validateEmail, validateMobile, validateRequired } from './validateRequired';
import FormField from './FormField';
import ContentCard from './ContentCard';

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

const SUBMIT_CONTACT_FORM = gql`
  mutation SubmitContactForm(
    $request_type: String!
    $email: String!
    $name: String!
    $telephone: String!
    $orderNumber: String
    $comment: String!
    $productSku: String!
  ) {
    submitContactForm(
      input: {
        request_type: $request_type
        email: $email
        name: $name
        telephone: $telephone
        order_number: $orderNumber
        comment: $comment
        product_sku: $productSku
      }
    )
  }
`;

const ContactForm = () => {
  const { t } = useTranslation();
  const [submitForm, { loading: submitting }] = useMutation(SUBMIT_CONTACT_FORM, {
    onCompleted: (data) => {
      if (data.submitContactForm) {
        toast.success('Form submitted successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error('Something went wrong. Please try again.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    },
    onError: (error) => {
      toast.error(`Enter values properly`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  });


  async function handleFormSubmit(formApi,formState){
    const{values}  = formState
    await submitForm({
        variables: {
          request_type: "general_inquiry", 
          email: values.email,
          name: values.name,
          telephone: values.telephone,
          orderNumber: values.orderNumber || "", 
          comment: values.comment,
          productSku: "DEFAULT_SKU"
        }
      });


        formApi.reset({});
    



    console.log("Vales",values);
    
  }

  return (
    <>
      <ToastContainer /> 
      <Form  className="mt-4">
        {({ formApi, formState }) => (
          <>
            <FormField label="Name *" name="name" validate={validateRequired} />
            <FormField label="Email *" name="email" validate={validateEmail} />
            <FormField label="Mobile *" name="telephone" validate={validateMobile} />
            <FormField label="Order Number" name="orderNumber" />
            <FormField label="Message *" name="comment" validate={validateRequired} type="textarea" rows="4" />
            {console.log("Form State",formState)}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={formState.submitting || submitting} 
              onClick={() => handleFormSubmit(formApi, formState)}
            >
              {formState.submitting || submitting ? 'Submitting...' : 'Submit'}
            </button>
          </>
        )}
      </Form>
    </>
  );
};

const Gbody = () => {
  const { loading, error, data } = useQuery(GET_CONTACT_PAGE);

  if (loading) return <div className="text-center p-5">Loading...</div>;
  if (error) return <div className="text-center p-5">Error: {error.message}</div>;

  const { contactUsPage } = data;

  return (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
      <Container className="py-5">
        <Row>
          <Col lg={8}>
            <h1>{contactUsPage.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: contactUsPage.description }} className="mb-4" />
            <ContactForm />
          </Col>
          <Col lg={4}>
            {contactUsPage.right_side_content.map((content) => (
              <ContentCard key={content.id} content={content} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gbody;