import React, { useContext } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import MovieCard from '../components/MovieCard'
import NoFilms from './NoFilms'
import { MovieContext } from '../contexts/MovieProvider'

export default function SearchResults() {
  const { movieData } = useContext(MovieContext)
  return (
    <Container className="mt-3">
      <Row>
        {movieData ? (
          movieData.map((movie) => {
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
          })
        ) : (
          <NoFilms />
        )}
      </Row>
    </Container>
  )
}
