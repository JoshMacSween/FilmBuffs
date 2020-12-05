const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/UserModel')

router.post('/register', async (req, res) => {
  try {
    const { userName, email, password, passwordConfirm } = req.body

    if (!password || !email || !passwordConfirm)
      return res.status(400).json({ msg: 'Not all fields have been entered' })
    if (password.length < 6)
      return res
        .status(400)
        .json({ msg: 'Password must be at least six characters' })
    if (password !== passwordConfirm)
      return res.status(400).json({ msg: 'Passwords do not match' })

    const existingUser = await User.findOne({ email: email })
    if (existingUser)
      return res
        .status(400)
        .json({ msg: 'An account with that email already exists' })

    if (!userName) userName = email

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    const newUser = new User({
      email,
      password: passwordHash,
      userName,
    })
    const savedUser = newUser.save()
    res.json(savedUser)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
