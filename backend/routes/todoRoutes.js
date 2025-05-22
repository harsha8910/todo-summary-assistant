const express = require("express");
const router = express.Router();
const { getTodos, addTodo, deleteTodo, editTodo } = require("../controllers/todoController");
const { summarizeTodos } = require('../controllers/summaryController');

router.get("/todos", getTodos);         // GET /todos
router.post("/todos", addTodo);         // POST /todos
router.delete("/todos/:id", deleteTodo); // DELETE /todos/:id
router.put("/todos/:id", editTodo); // PUT /todos/:id
router.post('/summarize', summarizeTodos);

module.exports = router;
