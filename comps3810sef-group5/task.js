const express = require('express');
const router = express.Router();
const Task = require('./models/task');

const ensureAuth = (req, res, next) => {
  if (req.session.userId) return next();
  res.redirect('/login');
};

// GET /tasks
router.get('/', ensureAuth, async (req, res) => {
  const query = { userId: req.session.userId };
  if (req.query.title) query.title = { $regex: req.query.title, $options: 'i' };
  if (req.query.priority) query.priority = req.query.priority;
  if (req.query.status) query.status = req.query.status;
  if (req.query.dueDateStart && req.query.dueDateEnd) {
    query.dueDate = { $gte: req.query.dueDateStart, $lte: req.query.dueDateEnd };
  }
  const tasks = await Task.find(query).sort({ createdAt: -1 });
  res.render('tasks', { tasks, query: req.query });
});

// Create
router.get('/create', ensureAuth, (req, res) => res.render('create-task'));
router.post('/create', ensureAuth, async (req, res) => {
  const task = new Task({ ...req.body, userId: req.session.userId });
  await task.save();
  res.redirect('/tasks');
});

// Update
router.get('/edit/:id', ensureAuth, async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, userId: req.session.userId });
  if (!task) return res.status(404).send('Task not found');
  res.render('edit-task', { task });
});
router.post('/update/:id', ensureAuth, async (req, res) => {
  await Task.updateOne({ _id: req.params.id, userId: req.session.userId }, req.body);
  res.redirect('/tasks');
});

// Delete
router.post('/delete/:id', ensureAuth, async (req, res) => {
  await Task.deleteOne({ _id: req.params.id, userId: req.session.userId });
  res.redirect('/tasks');
});

module.exports = router;