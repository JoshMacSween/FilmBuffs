import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export const MovieContext = createContext()

export default function MovieProvider(props) {
  const [q, setQ] = useState('')
  const [movieData, setMovieData] = useState([])
  const history = useHistory()

  const onSubmitSearch = async (e) => {
    e.preventDefault()
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${q}&type=movie&plot=short&apikey=${process.env.REACT_APP_API_KEY}`
    )
    const fetchedMovie = await response.data
    setMovieData(fetchedMovie.Search)
    history.push(`/search/${q}`)
  }

  const onSearchChange = (e) => {
    e.preventDefault()
    const SearchValue = e.target.value
    setQ(SearchValue)
  }

  return (
    <MovieContext.Provider
      value={{
        movieData,
        onSearchChange,
        onSubmitSearch,
        q,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  )
}
