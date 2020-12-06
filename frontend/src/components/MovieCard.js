import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MovieCard({ id, year, title, poster, plot }) {
  return (
    <>

        <Link
          to={{
            pathname: `/selected/${id}`,
            state: {
              title: `${title}`,
              year: `${year}`,
              poster: `${poster}`,
              plot: `${plot}`,
            },
          }}
        >
          <Card.Img className="moviePoster mb-3" src={poster} />
        </Link>

    </>
  )
}
