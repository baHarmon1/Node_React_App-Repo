const express = require('express')
const router = express.Router()

router.get('/search-results', (req, res) => {
    const str = [{
        "test": "testing",
    }]
    res.end(JSON.stringify(str))
})

module.exports = router;