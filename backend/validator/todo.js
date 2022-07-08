const mongoose = require('mongoose');
const { check, param } = require('express-validator');

// add
exports.addTodoValidator = [
  check('title').trim().notEmpty().withMessage('Title is required'),
  // check('category').custom(async (category) => {
  //   if (!category) {
  //     throw 'Category id is required';
  //   }
  //   if (!mongoose.Types.ObjectId.isValid(category)) {
  //     throw 'No catregory data found by lesson id';
  //   }
  // }),
];

exports.updateTodoValidator = [
  check('category').custom(async (category) => {
    if (category) {
      if (!mongoose.Types.ObjectId.isValid(category)) {
        throw 'No category data found by category id';
      }
    }
  }),
];

// id validator
exports.idValidator = [
  param('id').custom(async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw 'No todo data found by todo id';
    }
  }),
];
