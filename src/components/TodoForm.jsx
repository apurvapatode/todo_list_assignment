import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

function TodoForm() {
  const [task, setTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
 
    const currentUserStr = localStorage.getItem("currentUser");
   
    const currentUser = JSON.parse(currentUserStr);
   
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex(u => u.username === currentUser.username);
    
    if (userIndex !== -1) {
      const newTask = { id: Date.now(), title: task, status: "ToDo" };
    
      users[userIndex].tasks = [...users[userIndex].tasks, newTask];
      
      localStorage.setItem("users", JSON.stringify(users));
      alert("Task added successfully");

      setTask("");
    } else {
      alert("User not found. Please log in again.");
    }
  };
  

  return (
    <Row>
      <Col xs={3}>
        <Form onSubmit={handleAddTask} style={{ width: 200 }}>
          <Form.Group className="my-3" controlId="taskInput">
            <Form.Label className="font-bold">Task</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g., Shopping"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="secondary" type="submit">Add</Button>
        </Form>
      </Col>
    </Row>
  );
}

export default TodoForm;
