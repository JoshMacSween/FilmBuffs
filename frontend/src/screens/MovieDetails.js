import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { Container, Row, Col, Image, ListGroup, Button } from 'react-bootstrap'

export default function MovieDetails(props) {
  const [movieInfo, setMovieInfo] = useState({
    Plot: '',
    Director: '',
    Actors: '',
    Year: '',
  })

  useEffect(() => {
    const grabMovieInfo = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${props.match.params.id}&type=movie&plot=short&apikey=${process.env.REACT_APP_API_KEY}`
      )
      const grabbedData = response.data
      console.log(grabbedData)
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
            <ListGroup.Item>Directed by: {movieInfo.Director}</ListGroup.Item>
            <ListGroup.Item>Starring: {movieInfo.Actors}</ListGroup.Item>
            <ListGroup.Item>{movieInfo.Plot}</ListGroup.Item>
            <ListGroup.Item>
              {movieInfo.Genre} | {movieInfo.Year}
            </ListGroup.Item>
          </ListGroup>
          <Button>Add To Watchlist</Button>
        </Col>
      </Row>
    </Container>
  )
}
