const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require("path");

require('dotenv').config({ path: 'variables.env' })

// Require all the routes
const counter = require('./routes/counter');

const port = process.env.PORT || 4567;

// Use the middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '2mb', type: 'application/json'}));
app.use(express.static(path.join(__dirname+'/public')));

// Create all the endpoints
app.get('/', counter.getRoot)
app.get('/count', counter.getCount)

// Add swagger to give the users a nice UI for the API documentation
app.get('/swagger',(req,res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(port, () => {
  console.log(`running on port ${port}`)
})
