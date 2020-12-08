import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

export default function StaffPicks() {
  return (
    <Container className="mt-3">
      <h2>Top picks from FilmBuffs head Film Buff</h2>

      <Row>
        <Col>Wizards</Col>
        <Col>Inland Empire</Col>
        <Col>Jesus Shows You The Way To The HighWay</Col>
        <Col>Happiness of the Katakuries</Col>
        <Col>House</Col>
      </Row>
      <Row>
        <Col>The Holy Mountain</Col>
        <Col>2001: A Space Odyssee</Col>
        <Col>Solaris</Col>
        <Col>Forbidden Planet</Col>
        <Col>Midsommar</Col>
      </Row>

    </Container>
  )
}
