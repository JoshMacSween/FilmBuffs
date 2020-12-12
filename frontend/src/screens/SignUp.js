import React from 'react'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'

export default function SignUp() {
  return (
    <Card style={{ marginTop: '10%', backgroundColor: '#eee' }}>
      <Card.Body>
        <h2 className="text-center mb-4>">Sign Up</h2>
        <Form>
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
          <Button>Sign Up</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}
