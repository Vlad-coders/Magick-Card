import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

export default function SignUpPage({ signUpHandler }) {
  return (
    <Form onSubmit={signUpHandler}>
      <Form.Group>
        <Form.Label> Имя</Form.Label>
        <Form.Control type="text" name="name" placeholder="Иван" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email </Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="name@example.com"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPlaintextPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
        <Form.Label> Город</Form.Label>
        <Form.Control type="text" name="city" placeholder="Москва" />
        <Button type="submit" variant="dark">
          Подтвердить
        </Button>
      </Form.Group>
    </Form>
  );
}
