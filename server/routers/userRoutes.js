const express = require('express'); 
const router = express.Router(); 

const db = require('../models/userModel.js'); 


router.get('/', (req, res) => {
  //will get the current users list of teams from the db
  let sqlSelect = 'SELECT * FROM teams';
  db.query(sqlSelect)
    .then(data => {
     
      res.status(248).json(data.rows)
    })
    .catch(err => {
      console.log(err)
       res.sendStatus(500)
    })
    
})

router.post('/:name', (req, res) => {
  //will add team to the user 
  const name = req.params.name
  console.log(req.params.name)
  const createdObj = {
    'Tottenham': {
      opp: 'Everton',
      date: '9/13', 
      time: '8:30am',
    },
    'Liverpool' : {
      opp: 'Leeds', 
      date: '9/12', 
      time: '9:30am',
    },
    'PSG' : {
      opp: 'MAR', 
      date: '9/13', 
      time: '12:00pm'
    }
  }
  let sqlSelect = `INSERT INTO teams (name, opp, date, time)
                   VALUES ('${name}', '${createdObj[name].opp}', '${createdObj[name].date}', '${createdObj[name].time}')`;
  db.query(sqlSelect)
    .then(data => {
      console.log(data)
      res.json(createdObj[name])
    }) 
})

router.delete('/:name', (req, res) => {
  //will delete a team 
  console.log(req.params)
  let sqlSelect = `DELETE FROM teams WHERE name='${req.params.name}'`; 
  db.query(sqlSelect)
    .then(data => {
      // console.log(data)
      res.json(data)
    })
  // res.sendStatus(315); 
})

module.exports = router; 