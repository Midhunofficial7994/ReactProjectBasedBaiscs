import React, { useState, useEffect } from "react";
import { Container, Table, Button, Row } from "react-bootstrap";
import TaskForm from "./TaskForm";
import { FaTrashAlt } from "react-icons/fa";
import DeleteConfirmationModal from "./DeleteConfirmation";
import useDatabase from "../CustomHooks/useDatabase";
import { Link } from "react-router-dom";
import useDeleteModal from "../CustomHooks/useDeleteModal";

const Database = () => {
  const { tasks, handleAddTask, handleDeleteTask } = useDatabase();
  const { showModal, openModal, closeModal, confirmDelete } = useDeleteModal();

  return (
    <>
      <h1>Todo-App</h1>
      <Row className="justify-content-center my-3">
        <Link to="/localstorage">
          <Button variant="warning">Localstorage</Button>
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
            {tasks.length === 0 ? (
              <tr>
                <td colSpan="2" className="text-center">
                  No tasks available
                </td>
              </tr>
            ) : (
              tasks.map((task) => (
                <tr key={task._id}>
                  <td>{task.text}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => openModal(task._id)}
                    >
                      <FaTrashAlt /> Delete
                    </Button>
                  </td>
                </tr>
              ))
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

export default Database;
