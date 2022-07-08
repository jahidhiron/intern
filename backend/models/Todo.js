const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const todoSchema = Schema(
  {
    title: { type: String, require: true },
    desc: { type: String },
  },
  { timesstamp: true }
);

module.exports = model('todo', todoSchema);
