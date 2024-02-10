import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isLoggingIn, setIsLoggingIn] = useState(true); 
  const [user, setUser] = useState({
    username: "",
    password: "",
    tasks: []
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex((u) => u.username === user.username);

    if (isLoggingIn) {
      if (userIndex !== -1 && users[userIndex].password === user.password) {
        alert("Login Successful");
        localStorage.setItem("currentUser", JSON.stringify({ username: user.username }));
        navigate("/todo");
      } else {
        alert("Invalid username or password.");
      }
    } else {
      if (userIndex === -1) {
        users.push({ ...user, tasks: [] }); 
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration Successful");
        setIsLoggingIn(true); 
      } else {
        alert("Username already exists.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const toggleMode = () => setIsLoggingIn(!isLoggingIn);

  return (
    <Row>
      <Col xs={12} md={6} lg={4} className="mx-auto my-5">
        <Card>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="success" type="submit">
                  {isLoggingIn ? "Log In" : "Register"}
                </Button>
                <Button variant="link" onClick={toggleMode}>
                  {isLoggingIn ? " Register" : " Log In"}
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Login;
