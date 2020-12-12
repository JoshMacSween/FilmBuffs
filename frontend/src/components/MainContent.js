import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import SearchBar from './SearchBar'
import SearchResults from '../screens/SearchResults'
import { MovieContext } from '../contexts/MovieProvider'

export default function MainContent() {
  const { onSubmitSearch, onSearchChange, q } = useContext(MovieContext)
  return (
    <div >
      <Container className="main">
        <h1 className="pt-3">Welcome to FilmBuffs</h1>
        <i>We know movies</i>
        <SearchBar
          onSearchChange={onSearchChange}
          onSubmitSearch={onSubmitSearch}
          movieTitle={q}
        />

        <SearchResults />
      </Container>
    </div>
  )
}
