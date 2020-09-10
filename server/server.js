require('dotenv').config()
const express = require('express'); 
const path = require('path'); 
const cors = require('cors'); 
const app = express();

const PORT = 3000;

const userRouter = require('./routers/userRoutes.js')

app.use(cors())

app.listen(PORT, () => {
  console.log(`listening on port${PORT}`)
})

//don't know what the line below does... 
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get( '/' , (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'))
})

app.use('/user', userRouter); 

//configured route handler 
app.use((req, res) => {
  res.sendStatus(404)
})

//configure global error handler 