import './App.css'
import MovieProvider from './contexts/MovieProvider'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SignUp from './screens/SignUp'
import SearchBar from './components/SearchBar'
import MainContent from './components/MainContent'
import MovieDetails from './screens/MovieDetails'
import SearchResults from './screens/SearchResults'
import StaffPicks from './screens/StaffPicks'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container>
          <MovieProvider>
            <Route path="/" component={SearchBar} exact />
            <Route path="/signUp" component={SignUp} exact />
            <Route path="/staffPicks" component={StaffPicks} exact />
            <Route path="/selected/:id" component={MovieDetails} exact />
            <Route path="/search/:title" component={SearchResults} exact />
          </MovieProvider>
        </Container>
        <Footer />
      </Router>
    </div>
  )
}

export default App
