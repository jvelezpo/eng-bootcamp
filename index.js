const express = require('express')
const app = express()
const bodyParser = require('body-parser')

require('dotenv').config({ path: 'variables.env' })

// Require all the routes
const example = require('./routes/example');


const port = process.env.PORT || 5000;

// Use the middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: '2mb', type: 'application/json'}));

// Create all the endpoints
app.get('/example',  example.getExample)
app.post('/example',  example.newExample)
app.put('/example',  example.updateExample)
app.delete('/example',  example.deleteExample)



app.listen(port, () => {
  console.log(`running on port ${port}`)
})
