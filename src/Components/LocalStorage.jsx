import React from "react";
import { Container, Table, Button, Row } from "react-bootstrap";
import TaskForm from "./TaskForm";
import useLocal from "../CustomHooks/useLocal";
import { FaTrashAlt } from "react-icons/fa";
import DeleteConfirmationModal from "./DeleteConfirmation";
import { Link } from "react-router-dom";
import useDeleteModal from "../CustomHooks/useDeleteModal";

const LocalStorage = () => {
  const { tasks, handleAddTask, handleDeleteTask } = useLocal();
  const { showModal, openModal, closeModal, confirmDelete } = useDeleteModal();

  return (
    <>
        <h1>Todo-App</h1>
      <Row className="justify-content-center my-3">
        <Link to="/database">
          <Button variant="primary">Go to Database</Button>
        </Link>
      </Row>
      <Row className="justify-content-center my-3">
        <Link to="/paginationStep/1">
          <Button variant="success">Go to Pagination Step</Button>
        </Link>
      </Row>
      <Row className="justify-content-center my-3">
        <Link to="/paginationScroll">
          <Button variant="danger">Go to Pagination Scroll</Button>
        </Link>
      </Row>
      <Row className="justify-content-center my-3">
        <Link to="/paginationScroll">
          <Button variant="danger">Go to Swr Scroll</Button>
        </Link>
      </Row>
      <Row className="justify-content-center my-3">
        <Link to="/formValidation">
          <Button variant="success">Go to Form</Button>
        </Link>
      </Row>
      <Row className="justify-content-center my-3">
        <Link to="/formValidationInformed">
          <Button variant="success">Go to Informed Validation</Button>
        </Link>
      </Row>
      <Row className="justify-content-center my-3">
        <Link to="/urlSearch">
          <Button variant="primary">Search Params</Button>
        </Link>
      </Row>
      <Row className="justify-content-center my-3">
        <Link to="/multi">
          <Button variant="primary">MultiForm</Button>
        </Link>
      </Row>
      <Row className="justify-content-center my-3">
        <Link to="/format">
          <Button variant="primary">Format</Button>
        </Link>
      </Row>
      <Row className="justify-content-center my-3">
        <Link to="/Measure Space">
          <Button variant="warning">Measure Space</Button>
        </Link>
      </Row>
      <Row className="justify-content-center my-3">
        <Link to="/google">
          <Button variant="success">Google SIgnIn</Button>
        </Link>
      </Row>
      <Row className="justify-content-center my-3">
        <Link to="/facebook">
          <Button variant="primary">Facebook SignIn</Button>
        </Link>
      </Row>
      <Row className="justify-content-center my-3">
        <Link to="/antdesign">
          <Button variant="primary">Antdesign</Button>
        </Link>
      </Row>

      <TaskForm handleAddTask={handleAddTask} tasks={tasks} />

      <Container className="mt-4">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length ? (
              tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.text}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => openModal(task.id)}
                    >
                      <FaTrashAlt /> Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center">
                  No tasks available
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>

      <DeleteConfirmationModal
        show={showModal}
        onClose={closeModal}
        onConfirm={() => confirmDelete(handleDeleteTask)}
      />
    </>
  );
};

export default LocalStorage;
