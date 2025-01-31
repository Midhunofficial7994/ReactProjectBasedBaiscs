import React from "react";
import { Card } from "react-bootstrap";

const PostCard = ({ post }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Card.Text>{post.id}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
