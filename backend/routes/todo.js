const router = require('express').Router();
const {
  addTodo,
  updateTodo,
  deleteTodo,
  getTodos,
  searchTodo,
  getTodo,
} = require('../controllers/todo');
const {
  addTodoValidator,
  updateTodoValidator,
  idValidator,
} = require('../validator/todo');
const validationResult = require('../validator');

router.post('/', addTodoValidator, validationResult, addTodo);

// parms: id -> find, body-> update
router.patch(
  '/:id',
  updateTodoValidator,
  idValidator,
  validationResult,
  updateTodo
);

router.delete('/:id', idValidator, validationResult, deleteTodo);

router.get('/', getTodos);

router.get('/search', searchTodo);

router.get('/:id', idValidator, validationResult, getTodo);

module.exports = router;

// body -> object
// parms -> object
// query -> object
