const { Schema, model } = require('mongoose');
const categorySchema = Schema(
  {
    tittle: { type: String, require: true },
    description: { type: String },
  },
  { timesstamp: true }
);

module.exports = model('category', categorySchema);
