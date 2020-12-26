const router = require('express').Router();
const mongoose = require('mongoose');

let User = require('../models/user.model'); //assumes js file

// gets and returns all users
/*
router.route('/').get((req, res) => { //this should honestly be fine?
  User.find()
  .then(users => {
    if(users.length > 0){
      res.status(200).json(users);
    }
    else {
      res.status(404).json({
        message: 'No entries found'
      });
    }
  })
  .catch(err => res.status(400).json('Error: ' + err));
});*/


router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

/*
router.route('/:userId').get((req, res) => {
  User.find()
});
*/


// add a new user
router.route('/add').post((req, res) => {
  const username = req.body.username;

  //const newUser = new User({username}); // gonna need more parameters at some point
  const newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username
  })


  newUser.save()
  .then(() => res.json('User.added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

/*
// deletes a user
router.delete("/:userId", (req, res, next) => {
  const id = req.params.userId;
  User.remove({_id: id})
  .exec()
  .then(result => {
    res.status(200).json(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
})*/




// gonna need more methods



module.exports = router;
