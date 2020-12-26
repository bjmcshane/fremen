const mongoose = require('mongoose');
const router = require('express').Router();


let Paycheck = require('../models/paycheck.model');





router.route('/').get((req, res) => {
  Paycheck.find()
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
});



router.route('/add').post((req, res) => {
  const date = Date(req.body.date);
  const source = String(req.body.source);
  const amount = Number(req.body.amount);

  const paycheck = new Paycheck({
    date,
    source,
    amount
  });

  paycheck.save()
  .then(() => res.status(200).json("paycheck added!"))
  .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;
