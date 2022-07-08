const Todo = require('../models/Todo');
const Categorie = require('../models/Categorie');

exports.addTodo = async (req, res) => {
  try {
    const { title } = req.body;
    console.log(title);
    const isTitleExist = await Todo.findOne({ title });
    if (isTitleExist) {
      return res.status(400).json({ title: 'Todo already taken' });
    }

    const newTodo = new Todo(req.body);
    await newTodo.save();

    res.status(201).json({ success: 'Todo added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error. Try again' });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { title, desc, category } = req.body;
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'No todo data found by id' });
    }

    todo.title = title ? title : todo.title;
    todo.desc = desc ? desc : todo.desc;
    todo.category = category ? category : todo.category;

    await todo.save();

    res.status(200).json({ message: 'Todo updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error. Try again' });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndRemove(req.params.id);

    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error. Try again' });
  }
};

exports.getTodos = async (req, res) => {
  try {
    let { page, size } = req.query;
    let pageNumber = page ? parseInt(page) : 1;
    let limit = size ? parseInt(size) : 10;

    const totalDocuments = await Todo.countDocuments({});
    const totalPage = Math.ceil(totalDocuments / limit);

    const todos = await Todo.find({})
      .sort({ _id: -1 })
      .skip((pageNumber - 1) * limit)
      .limit(limit)
      .lean();

    if (todos.length === 0) {
      return res.status(404).json({ message: 'No todo data found' });
    }

    res.status(200).json({
      todos,
      totalPage,
      current: page ? page : 1,
      totalDocuments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error. Try again' });
  }
};

exports.searchTodo = async (req, res) => {
  try {
    const { q } = req.query;

    let regex = new RegExp(q, 'i');
    let query = {
      $or: [{ title: regex }, { desc: regex }],
    };

    Todo.find({ title: 'abcd' });

    console.log(query);

    const todos = await Todo.find(query);
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error. Try again' });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id); // []
    if (!todo) {
      return res.status(404).json({ message: 'No todo data found' });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Error. Try again' });
  }
};
