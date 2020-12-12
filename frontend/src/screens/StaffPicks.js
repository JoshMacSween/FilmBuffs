import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

export default function StaffPicks() {
  return (
    <Container className="mt-3">
      <h2>Top picks from FilmBuffs head Film Buff</h2>

      <Row>
        <Col>
          <ul className="topTen">
            <li>Wizards</li>
            <li>Inline Empire</li>
            <li>Jesus Shows You The Way To The HighWay</li>
            <li>Happiness of the Katakuries</li>
            <li>House</li>
          </ul>
        </Col>
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
