import React, { useState } from 'react'
import axios from 'axios'
import { Container, Col, Row } from 'react-bootstrap'
import MovieCard from './MovieCard'
import SearchBar from './SearchBar'
import NoFilms from '../screens/NoFilms'
import SearchResults from '../screens/SearchResults'
import { useHistory } from 'react-router-dom'

export default function MainContent() {
  const [q, setQ] = useState('')
  const [movieData, setMovieData] = useState([])
  const history = useHistory()

  const onSubmitSearch = async (e) => {
    e.preventDefault()
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${q}&type=movie&plot=short&apikey=${process.env.REACT_APP_API_KEY}`
    )
    const fetchedMovie = await response.data
    setMovieData(fetchedMovie.Search)
    // history.push(`/${q}`)
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
          <SearchResults movieData={movieData} />
        </Row>
      </Container>
    </div>
  )
}
