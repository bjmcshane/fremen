const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// A user will need a :
// username + password
// a schema of paychecks
// a schema of expenses
// a schema of a budget gameplan, and the related performance
/*
const userSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3},
  password: String,
  budget: {type: Schema.ObjectId, ref: 'User'}
}, {timestamps: true});*/


const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: String
})


module.exports = mongoose.model('User', userSchema);
