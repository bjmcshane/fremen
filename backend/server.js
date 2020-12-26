const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
require('dotenv').config();



const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection esablished succesfylly pussy");
});


// adds routes as middleware
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const budgetsRouter = require('./routes/budgets');
app.use('/budgets', budgetsRouter);

const paychecksRouter = require('./routes/paychecks');
app.use('/paychecks', paychecksRouter);

const expenditureRouter = require('./routes/expenditures');
app.use('/expenditures', expenditureRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
