import React from 'react'
import { Container, Card } from 'react-bootstrap'
import {Link} from 'react-router-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default function MovieCard({ id, title, poster }) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Img src={poster} />
            <a href={`/:${id}`}>{title}</a>
        </Card.Body>
      </Card>
    </>
  )
}
