import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap'

export default function MovieDetails() {
  const [movieInfo, setMovieInfo] = useState({Plot: " "})

  useEffect(() => {
    const grabMovieInfo = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?i=tt0266697&type=movie&plot=short&apikey=${process.env.REACT_APP_API_KEY}`
      )
      const grabbedData = response.data
      setMovieInfo(grabbedData)
    }
    grabMovieInfo()
  }, [])

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
            <ListGroup.Item>
              {movieInfo.Plot}
              {/* {location.state.plot
                ? location.state.plot
                : 'Plot not yet available'} */}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}
