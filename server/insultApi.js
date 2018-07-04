const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  request
    .get('https://lakerolmaker-insult-generator-v1.p.mashape.com/?mode=random')
    .set('X-Mashape-Key', 'mtuIL48pZbmsh1FbUB2CCfhTGFc8p11hau2jsnu9Q5GCeaYSDJ')
    .set('Accept', 'application/json')
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json({insult: result.text})
      }
    })
})

module.exports = router
