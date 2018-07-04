const path = require('path')
const express = require('express')
const insults = require('./insultApi')

const server = express()

server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/insults', insults)

module.exports = server
