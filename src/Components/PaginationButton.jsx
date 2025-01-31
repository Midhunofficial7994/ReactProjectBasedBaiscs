import React from "react";
import usePaginatedData from "../CustomHooks/usePaginationData";
import { Card, Button, Row, Col, Spinner } from "react-bootstrap";

function PaginatedCards() {
  const itemsPerPage = 9;
  const { data, error, isLoading, totalPages, handlePageChange, currentPage } =
    usePaginatedData(itemsPerPage);

  const handlePageChangeWrapper = (page) => {
    handlePageChange(page);
  };

  if (isLoading) return <Spinner animation="border" />;
  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <Row>
        {data.map((post) => (
          <Col key={post.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center mt-4">
        <Button
          onClick={() => handlePageChangeWrapper(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          Previous
        </Button>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            onClick={() => handlePageChangeWrapper(index + 1)}
            active={currentPage === index + 1}
            className="mx-1"
          >
            {index + 1}
          </Button>
        ))}
        <Button
          onClick={() => handlePageChangeWrapper(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default PaginatedCards;
