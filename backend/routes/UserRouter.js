const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/UserModel");

router.post("/register", async (req, res) => {
  try {
    let { userName, email, password, passwordConfirm, watchList } = req.body;

    if (!password || !email || !passwordConfirm)
      return res.status(400).json({ msg: "Not all fields have been entered" });
    if (password.length < 6)
      return res
        .status(400)
        .json({ msg: "Password must be at least six characters" });
    if (password !== passwordConfirm)
      return res.status(400).json({ msg: "Passwords do not match" });

    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with that email already exists" });

    if (!userName) userName = email;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      userName,
      watchList,
    });
    const savedUser = newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await User.findOne({ email: email });

    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with that email has been registered." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        userName: user.userName,
      },
    });
    console.log(token);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    const userDelete = await User.findByIdAndDelete(req.user);
    res.json(userDelete);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.post("/tokenValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (!verified) return res.json(false);
    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});
module.exports = router;
