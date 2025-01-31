import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Spinner } from "react-bootstrap";
import useForm from "../CustomHooks/useForm";
import { toast, Toaster } from "react-hot-toast";

function TaskForm({ handleAddTask, tasks }) {
  const { taskInput, handleChange, handleSubmit, error, loading } = useForm(handleAddTask,tasks);

  const handleTaskSubmit = async (e) => {
    e.preventDefault();

    await handleSubmit(e);

    if (!loading) {
      if (error) {
        toast.error(error);
      } else {
        toast.success("Task added successfully!");
      }
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Form onSubmit={handleTaskSubmit} className="mb-5 w-50">
        <Form.Group className="mb-4 mt-5">
          <Form.Control
            type="text"
            placeholder="Enter a task"
            value={taskInput}
            onChange={handleChange}
            className="custom-input w-auto"
            isInvalid={!!error || taskInput.trim() === ""}
          />
          <Form.Control.Feedback type="invalid">
            {error || "Task cannot be empty"}
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          className="w-auto"
          size="sm"
          disabled={loading || taskInput.trim() === ""}
        >
          {loading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="me-2"
              />
              Adding...
            </>
          ) : (
            "Add Task"
          )}
        </Button>
      </Form>

      <Toaster position="top-center" />
    </Container>
  );
}

export default TaskForm;
