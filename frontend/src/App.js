import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SignUp from './screens/SignUp'
import MainContent from './components/MainContent'
import MovieDetails from './screens/MovieDetails'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/" component={MainContent} exact />
        <Route path="/signUp" component={SignUp} exact/>
        <Route path="/:id" component={MovieDetails} exact/>
        <Footer />
      </Router>
    </div>
  )
}

export default App
