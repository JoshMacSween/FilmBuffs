import React from 'react'
import { Container, Card } from 'react-bootstrap'

export default function MovieCard({ title, year, plot, poster }) {
  return (
    <>
      <Card>
        <Card.Img src={poster}/>
      </Card>
    </>
  )
}
