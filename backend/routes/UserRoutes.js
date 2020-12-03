const router = require('express').Router
const User = require('../models/UserModel')

router.post('/register', async (req, res) => {
  try {
    const { userName, email, password, passwordConfirm } = req.body

    if (!password || !email || !password)
      return res.status(400).json({ msg: 'Not all fields have been entered' })
    if (password.length < 6)
      return res.status(400)
  } catch (err) {
    req.status(500).json(err)
  }
})
