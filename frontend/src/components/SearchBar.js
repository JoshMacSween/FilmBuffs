import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

export default function SearchBar({onSearchChange, movieTitle, onSubmitSearch }) {
  return (
    <>
      <Form onSubmit={onSubmitSearch} className="py-2">
        <Form.Control placeholder={movieTitle} onChange={onSearchChange}/>
        <Button className="my-2">
          Search
        </Button>
      </Form>
    </>
  )
}
