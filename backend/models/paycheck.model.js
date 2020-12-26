const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// a paycheck will need:
// a date
// a source
// an amount
//


const paycheckSchema = new Schema({
  date: Date,
  source: String,
  amount: Number
});


module.exports = mongoose.model('Paycheck', paycheckSchema);
