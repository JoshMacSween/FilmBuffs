import React from 'react'
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  Image,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default function SearchBar(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image className="navLogo" src="/images/favicon_movie2.png" alt="FilmBuffs" fluid/>
            </Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/signUp">
            <Navbar.Brand className="text-white ml-auto">Sign Up</Navbar.Brand>
          </LinkContainer>
          {/* <LinkContainer to="/logIn">
            <Nav.Item className="text-white ml-3">Log In</Nav.Item>
          </LinkContainer> */}
        </Container>
      </Navbar>
    </>
  )
}
