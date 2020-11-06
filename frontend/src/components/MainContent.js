import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import MovieCard from './MovieCard'
import SearchBar from './SearchBar'

export default function MainContent() {
  const [q, setQ] = useState('')
  const [movieData, setMovieData] = useState([])

  const onSubmitSearch = async (e) => {
    e.preventDefault()
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${q}&p=short&apikey=${process.env.REACT_APP_API_KEY}`
    )
    const fetchedMovie = await response.data
    setMovieData(fetchedMovie.Search)
  }

  const onSearchChange = (e) => {
    e.preventDefault()
    const SearchValue = e.target.value
    setQ(SearchValue)
  }

  return (
    <div>
      <Container>
        <h1 className="pt-3">Welcome to FilmBuffs</h1>
        <i>We know movies</i>
        <SearchBar
          onSearchChange={onSearchChange}
          onSubmitSearch={onSubmitSearch}
          movieTitle={q}
        />

        <Row>
          <Col>
            <Card>Just type in the movie you'd like to learn more about</Card>
          </Col>
          <ul>
            {movieData.map((movie, i) => {
              return (
                <li key={i}>
                  <MovieCard
                    title={movie.Title}
                    year={movie.Year}
                    poster={movie.Poster}
                    plot={movie.Plot}
                  />
                </li>
              )
            })}
          </ul>
        </Row>
      </Container>
    </div>
  )
}
