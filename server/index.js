// Boiler plate:
const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');

const csv = require('csv-parser');
const fs = require('fs');
const results = [];

const app = express()

app.get('/', (req, res) => {
    res.send(results)
})

fs.createReadStream('emails3a89.CSV')
.pipe(csv({}))
.on('data', (data) => results.push(data))
.on('end', () => {
    })

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json()) // convert to json format
app.use('/', routesHandler)

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})