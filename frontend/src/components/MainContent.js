import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'

export default function MainContent() {
  const [q, setQ] = useState('Blade Runner')
  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${q}&apikey=${process.env.REACT_APP_API_KEY}`
      )
      const fetchedMovie = await response.data
      setMovieData(fetchedMovie.Search)
    }
    fetchMovie()
  }, [setMovieData, q])

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
            <Card>
              <ul>
                {movieData.map((movie, i) => {
                  return <li key={i}>{movie.Title} &copy; {movie.Year}</li>
                })}
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
