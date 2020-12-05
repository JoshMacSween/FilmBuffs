const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

dotenv.config()

//Express Setup

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

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

app.listen(PORT, console.log(`Server listening at port: ${PORT}`))
app.use('/users', require('./routes/UserRoutes'))
