import React from 'react'
import { Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MovieCard({ onSelectFilm, id, year, title, poster }) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Img src={poster} />
          {/* <Link to={`/${id}/${title}/${year}/${poster}`}>{title}</Link> */}
          <Link
            to={{
              pathname: `/${id}`,
              state: {
                title: `${title}`,
                year: `${year}`,
                poster: `${poster}`
              }
            }}
          >
            {title}
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}
