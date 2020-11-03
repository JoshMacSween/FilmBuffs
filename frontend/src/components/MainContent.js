import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Col, Row, Card } from 'react-bootstrap'

export default function MainContent() {
  const [q, setQ] = useState('Blade Runner')

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${q}&apikey=${process.env.REACT_APP_API_KEY}`)
      .then(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.log(error)
        }
      )
  })

  return (
    <div>
      <Container>
        <h1 className="pt-3">Welcome to FilmBuffs</h1>
        <i>We know movies</i>
        <Row>
          <Col>
            <Card>Just type in the movie you'd like to learn more about</Card>
          </Col>
          <Col>
            <Card>And we'll do the rest</Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
