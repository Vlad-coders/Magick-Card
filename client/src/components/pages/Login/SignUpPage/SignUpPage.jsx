import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { Container } from "semantic-ui-react";
import './SignUp.css'

export default function SignUpPage({ signUpHandler }) {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="form-container">
        <h2 className="text-center mb-4">Регистрация</h2>
        <Form onSubmit={signUpHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Имя</Form.Label>
            <Form.Control type="text" name="name" placeholder="Иван" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Пароль</Form.Label>
            <Form.Control type="password" name="password" placeholder="Пароль" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Город</Form.Label>
            <Form.Control type="text" name="city" placeholder="Москва" required />
          </Form.Group>

          <Button type="submit" variant="dark" className="w-100">
            Подтвердить
          </Button>
        </Form>
      </div>
    </Container>
  );
}
