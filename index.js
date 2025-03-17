// Import necessary modules
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON and serve static files
app.use(express.json());
app.use(express.static('public'));

// In-memory task storage
let tasks = [];

// API endpoint to get all tasks
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// API endpoint to add a new task
app.post('/api/tasks', (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ error: 'Task content is required' });
    }
    const newTask = { id: tasks.length + 1, task };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});