import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'

export default function MainContent() {
  return (
    <div>
      <Container>
        <h1 className="pt-3">Welcome to FilmBuffs</h1>
        <i>We know movies</i>
          <Row>
            <Col><Card>Just type in the movie you'd like to learn more about</Card></Col>
            <Col><Card>And we'll do the rest</Card></Col>
          </Row>
      </Container>
    </div>
  )
}
