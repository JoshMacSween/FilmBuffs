import React, { useContext } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { MovieContext } from '../contexts/MovieProvider'

export default function SearchBar() {
  const { onSearchChange, onSubmitSearch } = useContext(MovieContext)
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <Form onSubmit={onSubmitSearch} className="py-2">
            <Form.Control
              autoFocus
              className="text-center"
              placeholder="Any movie you like..."
              onChange={onSearchChange}
            />
            <Button className="my-3" type="submit">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
