const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// an expenditure will need:
// a date
// an amount
// a category
// percentage of how much it takes from it's budget category?
// a value rating?
// a projected cost per year or month based of frequency?

const expenditureSchema = new Schema({
  date: Date,
  category: String,
  amount: Number
});



module.exports = mongoose.model('Expenditure', expenditureSchema);
