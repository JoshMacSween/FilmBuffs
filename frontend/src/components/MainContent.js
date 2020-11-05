import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import MovieCard from './MovieCard'

export default function MainContent() {
  const [q, setQ] = useState('Eraserhead')
  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${q}&p=short&apikey=${process.env.REACT_APP_API_KEY}`
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
          <ul>
            {movieData.map((movie, i) => {
              return <li key={i}><MovieCard title={movie.Title} year={movie.Year} poster={movie.Poster} plot={movie.Plot}/></li>
            })}
          {/* {movieData.map((movie, i) => {
            return <li key={i}><MovieCard title={movie.Title} year={movie.Year} poster={movie.Poster} plot={movie.Plot}/></li>
          }}}) */}
          </ul>
          {/* <Col>
            <MovieCard title={movieData.Title} year={movieData.Year} poster={movieData.Poster} plot={movieData.Plot}/>
          </Col> */}
        </Row>
      </Container>
    </div>
  )
}
