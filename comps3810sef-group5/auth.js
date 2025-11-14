const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('./models/user');

// GET /login
router.get('/login', (req, res) => {
  res.render('login', { error: null });
});

// POST /login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && await bcrypt.compare(password, user.password)) {
    req.session.userId = user._id;
    res.redirect('/tasks');
  } else {
    res.render('login', { error: 'Invalid username or password' });
  }
});

// GET /register
router.get('/register', (req, res) => {
  res.render('register', { error: null });
});

// POST /register
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    req.session.userId = user._id;
    res.redirect('/tasks');
  } catch (err) {
    res.render('register', { error: 'Username or email already exists' });
  }
});

// GET /logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;