import './App.css'
import MovieProvider from './contexts/MovieProvider'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SignUp from './screens/SignUp'
import MainContent from './components/MainContent'
import MovieDetails from './screens/MovieDetails'
import SearchResults from './screens/SearchResults'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <MovieProvider>
          <Route path="/" component={MainContent} exact />
          <Route path="/signUp" component={SignUp} exact />
          <Route path="/selected/:id" component={MovieDetails} exact />
          <Route path="/search/:title" component={SearchResults} exact />
        </MovieProvider>
        <Footer />
      </Router>
    </div>
  )
}

export default App
