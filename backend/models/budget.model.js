const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const budgetSchema = new Schema({
  date: Date,
  paycheck: Number,
  livingexpenses: Number,
  savings: Number,
  etc: Number
},{timestamps:true});


module.exports = mongoose.model('Budget', budgetSchema);
