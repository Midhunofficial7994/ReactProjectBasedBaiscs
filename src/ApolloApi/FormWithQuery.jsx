// src/components/FormWithQuery.js
import React, { useState } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

// Define the GraphQL query
const GET_CMS_DATA = gql`
  query measureYourSpace {
    MeasureYourSpacePageCms {
      content
      content_type
      footer_html_block
      header_html_block
      meta_description
      meta_keywords
      meta_title
      title
    }
  }
`;

// Define a mutation for updating data (if needed)
const UPDATE_CMS_DATA = gql`
  mutation UpdateCmsData($content: String!) {
    updateCmsData(content: $content) {
      content
    }
  }
`;

const FormWithQuery = () => {
  // Fetch CMS data
  const { loading, error, data } = useQuery(GET_CMS_DATA);

  // Setup mutation for updating CMS data
  const [updateCmsData] = useMutation(UPDATE_CMS_DATA);

  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateCmsData({
        variables: { content }, // Send the updated content to the mutation
      });
      alert('CMS Data Updated');
    } catch (err) {
      console.error('Error updating CMS data', err);
    }
  };

  // Handle loading and error states
  if (loading) return <p>Loading CMS data...</p>;
  if (error) return <p>Error fetching CMS data: {error.message}</p>;

  return (
    <div>
      <h1>CMS Form</h1>

      {/* Display fetched CMS data */}
      <h3>{data.MeasureYourSpacePageCms.title}</h3>
      <p>{data.MeasureYourSpacePageCms.meta_description}</p>

      {/* The form to edit CMS content */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={content || data.MeasureYourSpacePageCms.content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Edit content here"
            rows="6"
            cols="50"
          />
        </div>
        <button type="submit">Update Content</button>
      </form>
    </div>
  );
};

export default FormWithQuery;
