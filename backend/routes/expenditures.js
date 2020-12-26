const mongoose = require('mongoose');
const router = require('express').Router();


let Expenditure = require('../models/expenditure.model');




/*
router.route('/').get((req, res) => {
  Expenditure.find()
  .then(expenditures => {
    if(expenditures.length > 0 ){
      res.status(200).json("expenditures: ", expenditures);
    }
    else {
      res.status(404).json({
        message: "No expenditures found!"
      });
    }
  })
  .catch(err => res.status(400).json("error: ", err));
});*/


router.route('/').get((req, res) => {
  Expenditure.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/add').post((req, res) => {
  const date = Date(req.body.date);
  const category = String(req.body.category);
  const amount = Number(req.body.amount);

  const newExpenditure = new Expenditure({
    date,
    category,
    amount
  });

  newExpenditure.save()
  .then(() => res.json('Expenditure added!'))
  .catch(err => res.status(400).json('Error: ' + err));

})




module.exports = router;
