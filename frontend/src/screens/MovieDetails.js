import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'

export default function MovieDetails(props) {
  return (
    <Container>
      <h1>Test</h1>
      <Row>
        <Col>
          <h1>Poster</h1>
          {props.Poster}
        </Col>

        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>{props.id}Title</ListGroup.Item>
            <ListGroup.Item>{props.Year}Year</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}