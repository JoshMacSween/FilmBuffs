import React from 'react'
import { Form, Row, Col, Card, Button, Container } from 'react-bootstrap'

export default function Login() {
  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4>">Log In</h2>
        <Form >
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control required placeholder="Email" />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control required placeholder="Password" />
            <Form.Label>Password Confirm</Form.Label>
            <Form.Control required placeholder="Password" />
          </Form.Group>
          <Button>Login</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}
