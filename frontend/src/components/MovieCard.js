import React from 'react'
import { Container, Card } from 'react-bootstrap'

export default function MovieCard({ id, title, poster, onSelectFilm }) {
  return (
    <>
      <Card>
        <Card.Body onClick={onSelectFilm(id)}>
          <Card.Img src={poster} />
          <a href="/:id">{title}</a>
        </Card.Body>
      </Card>
    </>
  )
}
