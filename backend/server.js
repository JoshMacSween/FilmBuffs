const express = require('express')
const dotenv = require('dotenv')
const http = require('http')

const app = express()

app.get('/', (req,res) => {
  res.send('Backend Running')
})


const port = process.env.PORT || 5000

app.listen(port, console.log(`Server listening at port: ${port}`))
