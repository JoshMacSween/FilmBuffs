const express = require('express')
const dotenv = require('dotenv')
const http = require('http')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

dotenv.config()

//Express Setup

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Backend Running')
})

const port = process.env.PORT || 5000

mongoose.connect(
  process.env.MONGO_URI,
  {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) throw err
    console.log('MongoDB connection successful')
  }
)

app.listen(port, console.log(`Server listening at port: ${port}`))
