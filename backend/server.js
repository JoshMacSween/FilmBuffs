const express = require('express')
const dotenv = require('dotenv')
const http = require('http')

const app = express()

app.get('/', (req, res) => {
  res.send('Backend Running')
})

app.get(
  `/http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=Sharknado&y=2013&plot=short&r=xml`,
  (req, res) => {
    res.send(req.body)
  }
)

const port = process.env.PORT || 5000

app.listen(port, console.log(`Server listening at port: ${port}`))
