import './App.css'
import MovieProvider from './contexts/MovieProvider'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SignUp from './screens/SignUp'
import MainContent from './components/MainContent'
import MovieDetails from './screens/MovieDetails'
import SearchResults from './screens/SearchResults'
import Login from './screens/Login'
import StaffPicks from './screens/StaffPicks'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import UserProvider from './contexts/UserProvider'

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <NavBar />
          <Container>
            <MovieProvider>
              <Route path="/" component={MainContent} exact />
              <Route path="/signUp" component={SignUp} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/staffPicks" component={StaffPicks} exact />
              <Route path="/selected/:id" component={MovieDetails} exact />
              <Route path="/search/:title" component={SearchResults} exact />
            </MovieProvider>
          </Container>
          <Footer />
        </UserProvider>
      </Router>
    </div>
  )
}

export default App
