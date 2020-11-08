import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SignUp from './screens/SignUp'
import MainContent from './components/MainContent'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import MovieDetails from './screens/MovieDetails'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/" component={MainContent} exact />
        <Route path="/signUp" component={SignUp} />
        <Route path="/:id" component={MovieDetails}/>
        {/* <Route path="/:id/:title/:year/:poster" component={MovieDetails}/> */}
        <Footer />
      </Router>
    </div>
  )
}

export default App
