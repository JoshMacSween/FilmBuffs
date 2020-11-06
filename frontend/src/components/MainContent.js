import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import MovieCard from './MovieCard'
import MovieDetails from '../screens/MovieDetails'
import SearchBar from './SearchBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default function MainContent() {
  const [q, setQ] = useState('')
  const [selected, setSelected] = useState('')
  const [movieData, setMovieData] = useState([])

  const onSubmitSearch = async (e) => {
    e.preventDefault()
    const response = await axios.get(
      `http://www.omdbapi.com/?&apikey=${process.env.REACT_APP_API_KEY}&s=${q}`
    )
    const fetchedMovie = await response.data
    setMovieData(fetchedMovie.Search)
  }

  const onSearchChange = (e) => {
    e.preventDefault()
    const SearchValue = e.target.value
    setQ(SearchValue)
  }

  const onSelectFilm = async (imdbID) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?&apikey=${process.env.REACT_APP_API_KEY}&i=${imdbID}`
    )
    const fetchedMovie = await response.data.Search
    const filteredMovie = fetchedMovie.filter(imdbID === match.params.id)
    setSelected(filteredMovie)
    console.log(selected)
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
          <Router>
            <Route path="/:id" component={MovieDetails} />
          </Router>
          {movieData.map((movie) => {
            return (
              <Col sm={8} md={6} lg={3} key={movie.imdbID}>
                <MovieCard
                  id={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  plot={movie.Plot}
                  onSelectFilm={onSelectFilm}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}
