import React from 'react'
import { Jumbotron, Row, Col, Container } from 'react-bootstrap'

export default function NoFilms() {
  return (
    <Container>
      <Jumbotron>
        <h2>Uh oh!</h2>
        <h4>
          Looks like your tastes are so underground, even we haven't seen it.
        </h4>
        <h4>I guess you win!</h4>
      </Jumbotron>
    </Container>
  )
}
