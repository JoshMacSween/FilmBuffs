import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, Link } from 'react-router-dom'
import { Container, Row, Col, Image, ListGroup, Button } from 'react-bootstrap'

export default function MovieDetails(props) {
  const [movieInfo, setMovieInfo] = useState({
    Plot: '',
    Director: '',
    Actors: '',
    Year: '',
    Poster: '',
  })

  useEffect(() => {
    const grabMovieInfo = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?i=${props.match.params.id}&type=movie&plot=full&apikey=${process.env.REACT_APP_API_KEY}`
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
          <Image src={movieInfo.Poster} fluid />
        </Col>

        <Col className="py-5">
          <ListGroup variant="flush">
            <ListGroup.Item>{movieInfo.Title}</ListGroup.Item>
            <ListGroup.Item>Directed by: {movieInfo.Director}</ListGroup.Item>
            <ListGroup.Item>Starring: {movieInfo.Actors}</ListGroup.Item>
            <ListGroup.Item>{movieInfo.Plot}</ListGroup.Item>
            <ListGroup.Item>
              {movieInfo.Genre} | {movieInfo.Year}
            </ListGroup.Item>
          </ListGroup>
          <Row className="text-center">
            <Col>
              <Button className="bg-dark mr-2">
                <Link to="/">Back To Search</Link>
              </Button>
              <Button className="bg-dark ml-2">
                <Link className="text-center">Add To Watchlist</Link>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
