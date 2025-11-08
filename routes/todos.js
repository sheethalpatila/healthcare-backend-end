const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');


// GET /api/todos - list
router.get('/', async (req, res) => {
try {
const todos = await Todo.find().sort({ createdAt: -1 });
res.json(todos);
} catch (err) {
res.status(500).json({ error: 'Failed to fetch todos' });
}
});


// POST /api/todos - create
router.post('/', async (req, res) => {
try {
const { title } = req.body;
const todo = new Todo({ title });
await todo.save();
res.status(201).json(todo);
} catch (err) {
res.status(400).json({ error: 'Failed to create todo' });
}
});


// PUT /api/todos/:id - update
router.put('/:id', async (req, res) => {
try {
const { id } = req.params;
const updates = req.body;
const todo = await Todo.findByIdAndUpdate(id, updates, { new: true });
if (!todo) return res.status(404).json({ error: 'Todo not found' });
res.json(todo);
} catch (err) {
res.status(400).json({ error: 'Failed to update todo' });
}
});


// DELETE /api/todos/:id - delete
router.delete('/:id', async (req, res) => {
try {
const { id } = req.params;
const todo = await Todo.findByIdAndDelete(id);
if (!todo) return res.status(404).json({ error: 'Todo not found' });
res.json({ message: 'Deleted' });
} catch (err) {
res.status(400).json({ error: 'Failed to delete todo' });
}
});


module.exports = router;