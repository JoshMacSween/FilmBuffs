import React from 'react'
import { Col } from 'react-bootstrap'
import MovieCard from '../components/MovieCard'
import NoFilms from './NoFilms'

export default function SearchResults({ movieData }) {
  return (
    <>
      {movieData ? movieData.map((movie) => {
        return (
          <Col key={movie.imdbID} sm={8} md={6} lg={3}>
            <MovieCard
              id={movie.imdbID}
              title={movie.Title}
              year={movie.Year}
              poster={movie.Poster}
              plot={movie.Plot}
            />
          </Col>
        )
      }) : <NoFilms />}
    </>
  )
}
