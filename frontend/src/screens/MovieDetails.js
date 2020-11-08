import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap'

export default function MovieDetails() {
  const location = useLocation()
  console.log(location)

  return (
    <Container>
      <Row>
        <Col className="py-5">
          <Image src={location.state.poster} fluid />
        </Col>

        <Col className="py-5">
          <ListGroup variant="flush">
            <ListGroup.Item>{location.state.title}</ListGroup.Item>
            <ListGroup.Item>{location.state.year}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}
