import React from 'react'
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function SearchBar(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>FilmBuffs</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/signUp">
            <Navbar.Brand>Sign Up</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
    </>
  )
}
