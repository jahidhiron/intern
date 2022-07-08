const app = require('./app');

// server run
app.listen(4001, 'localhost', () => {
  console.log(`Server started on localhost:4000, url http://localhost:4000`);
});
