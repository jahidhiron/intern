const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();
const { connect } = require('mongoose');

//mongodb connected
connect(`mongodb://localhost:27017/intern`)
  .then(() => console.log('User connection successfull'))
  .catch((error) => console.log(`Error to connect  ${error}`));

// morgan
const morgan = require('morgan');

const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/categories');
const todoRoute = require('./routes/todo');

const app = express();

//express
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/user', userRoutes);
app.use('/category', categoryRoutes);
app.use('/categor', categoryRoutes);
app.use('/todos', todoRoute);

module.exports = app;
