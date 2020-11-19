import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

export default function SearchBar({
  onSearchChange,
  movieTitle,
  onSubmitSearch,
}) {
  return (
    <>
      <Row>
        <Col>
          <Form onSubmit={onSubmitSearch} className="py-2">
            <Form.Control
              className="text-center"
              placeholder="Any movie you like..."
              onChange={onSearchChange}
            />
            <Button className="my-2" type="submit">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}
