import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { Container } from "semantic-ui-react";

export default function LoginPage({ loginHandler }) {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="form-container">
        <h2 className="text-center mb-4">Вход</h2>
        <Form onSubmit={loginHandler}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email адрес</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" name="password" placeholder="Пароль" required />
          </Form.Group>
          <Button type="submit" variant="dark" className="mt-3 w-100">
            Подтвердить
          </Button>
        </Form>
      </div>
    </Container>
  );
}
