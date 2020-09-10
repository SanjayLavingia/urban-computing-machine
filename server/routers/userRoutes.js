const express = require('express')
const router = express.Router(); 



router.get('/', (req, res) => {
  //will get the current users list of teams from the db 
  res.sendStatus(313); 
})

router.post('/', (req, res) => {
  //will add team to the user 
  res.sendStatus(314); 
})

router.delete('/', (req, res) => {
  //will delete a team 
  res.sendStatus(315); 
})

module.exports = router; 