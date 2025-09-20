const express = require("express"); // Import Express
const mongoose = require("mongoose"); // Import Mongoose
const cors = require("cors"); // Import CORS
const TodoModel = require("./Models/Todo"); // Import Todo model
require('dotenv').config(); // Load environment variables

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


  app.get('/api/test', (req, res) => {
    res.send('API is working!');
});

// Get all todos
app.get("/get", (req, res) => {
  TodoModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

// Update a todo by ID
app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndUpdate({ _id: id }, { done: true })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

// Delete a todo by ID
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

// Add a new todo
app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({ task })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});



// Start the server
app.listen(process.env.PORT || 3100, () => {
  console.log(`server running on port ${process.env.PORT || 3100}`);
});

