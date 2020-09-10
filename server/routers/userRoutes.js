const express = require('express'); 
const router = express.Router(); 

const db = require('../models/userModel.js'); 


router.get('/', (req, res) => {
  //will get the current users list of teams from the db
  let sqlSelect = 'SELECT * FROM users';
  db.query(sqlSelect)
    .then(data => {
      console.log(data);
      res.status(248).json(data)
    })
    .catch(err => {
      console.log(err)
       res.sendStatus(500)
    })
    
})

router.post('/', (req, res) => {
  //will add team to the user 
  let sqlSelect = `INSERT INTO users (name)
                   VALUES ('fromRouter')`;
  db.query(sqlSelect)
    .then(data => {
      console.log(data)
      res.json(data)
    })
  // res.sendStatus(314); 
})

router.delete('/', (req, res) => {
  //will delete a team 
  let sqlSelect = `DELETE FROM users WHERE name='fromRouter'`; 
  db.query(sqlSelect)
    .then(data => {
      console.log(data)
      res.json(data)
    })
  // res.sendStatus(315); 
})

module.exports = router; 