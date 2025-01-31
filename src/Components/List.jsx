import React from "react";
import { ListGroup, Button, Card } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa"; 

const List = ({ task, handleDeleteTask }) => {
  return (
    <Card className="mb-2 shadow-sm">
      <Card.Body>
        <ListGroup.Item
          key={task.id}
          className="d-flex justify-content-between align-items-center"
        >
          <span className="task-text">{task.text}</span>

          <Button
            variant="danger"
            onClick={() => handleDeleteTask(task.id)}
            className="d-flex align-items-center"
            title="Delete Task"
          >
            <FaTrashAlt className="me-2" />
            Delete
          </Button>
        </ListGroup.Item>
      </Card.Body>
    </Card>
  );
};

export default List;
