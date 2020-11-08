import React from 'react'
import { Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MovieCard({ onSelectFilm, id, title, poster }) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Img src={poster} />
          <Link to={`/${id}`}>{title}</Link>
        </Card.Body>
      </Card>
    </>
  )
}
