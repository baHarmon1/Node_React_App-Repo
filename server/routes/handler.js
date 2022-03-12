const express = require('express')
const router = express.Router()

router.get('/search-results', (req, res) => {
    const str = [{
        "test": "testing email results",
    }]
    res.end(JSON.stringify(str))
})

router.get('duplicate-results', (req, res) => {
    const str = [{
        // How do I get the result to show here
    }]
    res.end(JSON.stringify(str))
})
// router.get('/duplicate-results', (req, res) => {
//     const str = [{
//         "test": "testing duplicates",
//     }]
//     res.end(JSON.stringify(str))
// })

module.exports = router;