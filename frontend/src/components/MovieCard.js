import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MovieCard({ id, year, title, poster, plot }) {
  return (
    <>
      <Card>
        <Card.Body>
          <Link
            to={{
              pathname: `/search/${id}`,
              state: {
                title: `${title}`,
                year: `${year}`,
                poster: `${poster}`,
                plot: `${plot}`,
              },
            }}
          >
            <Card.Img src={poster} />
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}
