import React, { useContext } from 'react'
import { Container, Navbar, Nav, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { UserContext } from '../contexts/UserProvider'

export default function SearchBar(props) {
  const { loggedIn, logOut } = useContext(UserContext)

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image
                className="navLogo"
                src="/images/favicon_movie2.png"
                alt="FilmBuffs"
                fluid
              />
            </Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/staffPicks">
            <Nav.Link className="text-white ">[ Staff Picks ]</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signUp">
            <Nav.Link className="text-white ml-auto">[ Sign Up ]</Nav.Link>
          </LinkContainer>

          {loggedIn ? (
            <Nav.Item onClick={logOut} className="text-white ml-3">
              [ Log Out ]
            </Nav.Item>
          ) : (
            <LinkContainer to="/logIn">
              <Nav.Link className="text-white ml-3">[ Log In ]</Nav.Link>
            </LinkContainer>
          )}
        </Container>
      </Navbar>
    </>
  )
}
