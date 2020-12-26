const router = require('express').Router();
const mongoose = require('mongoose');


let Budget = require('../models/budget.model');



router.route('/').get((req, res) => {
  Budget.find()
  .then(budgets => {
    if(budgets.length > 0){
      res.status(200).json(budgets);
    }
    else{
      res.status(404).json({
        message: "no budgets found"
      });
    }
  })
  .catch( error => res.status('400').json({
    error: error
  }));
});


router.route('/add').post((req, res) => {
  const date = Date.parse(req.body.date);
  const paycheck = Number(req.body.paycheck);
  const livingexpenses= Number(req.body.livingexpenses);
  const savings = Number(req.body.savings);
  const etc = Number(req.body.etc);

  const newBudget = new Budget({
    date,
    paycheck,
    livingexpenses,
    savings,
    etc
  });

  newBudget.save()
  .then(() => res.json('Budget added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
