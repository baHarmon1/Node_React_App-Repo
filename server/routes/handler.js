const express = require('express')
const app = express()
const router = express.Router()
const index = require('../index.js')
const csv = require('csv-parser');
const fs = require('fs');
const results = [];

fs.createReadStream('emails3a89.CSV')
.pipe(csv({}))
.on('data', (data) => results.push(data))
.on('end', () => {
    })

router.get('/search-results', (req, res) => {
    res.send(results)
})

router.get('/duplicate-results', (req, res) => {
    res.send(results)
})

module.exports = router;