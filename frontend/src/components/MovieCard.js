import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function MovieCard({ id, year, title, poster, plot }) {
  const [movieInfo, setMovieInfo] = useState(null)

  const grabMovieInfo = async (e) => {
    e.preventDefault()
    const response = await axios.get(
      `http://www.omdbapi.com/?i=${id}&type=movie&plot=short&apikey=${process.env.REACT_APP_API_KEY}`
    )
    const grabbedData = await response.data.Plot
    // console.log(grabbedData);
    // setMovieInfo(grabbedData)
    console.log(movieInfo)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Img src={poster} />
          <Link
          onClick={grabMovieInfo}
            to={{
              pathname: `/${id}`,
              state: {
                title: `${title}`,
                year: `${year}`,
                poster: `${poster}`,
                plot: `${plot}`,
              },
            }}
          >
            {title}
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}
