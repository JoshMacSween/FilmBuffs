import React from 'react'
import {
  Container,
  Navbar,
  Nav,
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
          {/* <LinkContainer to="/staffPicks">
            <Nav.Link className="text-white ">[ Staff Picks ]</Nav.Link>
          </LinkContainer> */}
          <LinkContainer to="/signUp">
            <Nav.Link className="text-white ml-auto">[ Sign Up ]</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/logIn">
            <Nav.Item className="text-white ml-3">[ Log In ]</Nav.Item>
          </LinkContainer>
        </Container>
      </Navbar>
    </>
  )
}
