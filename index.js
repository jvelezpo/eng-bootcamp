const express = require('express')
const app = express()
const bodyParser = require('body-parser')

require('dotenv').config({ path: 'variables.env' })

// Require all the routes
const counter = require('./routes/counter');

const port = process.env.PORT || 4567;

// Use the middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '2mb', type: 'application/json'}));

// Create all the endpoints
app.get('/', counter.getRoot)
app.get('/count', counter.getCount)

app.listen(port, () => {
  console.log(`running on port ${port}`)
})
