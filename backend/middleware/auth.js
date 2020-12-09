const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  try {
    const token = req.header('x-auth-token')
    if (!token)
      return res
        .status(401)
        .json({ msg: 'No authenication token, access denied' })

    const verified = jwt.verify(token, process.env.JWT_SECRET)
    if (!verified)
      res.status(401).json({ msg: 'Token verification failed, access denied' })
    req.user = verified.id
    next()
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
}

module.exports = auth

