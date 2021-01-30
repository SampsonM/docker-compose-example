const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const mongooseConnect = require('./mongoConnect')
const getURL = require('../controllers')

function main() {
  const app = express()

  app.use(bodyparser.json())
  app.use(bodyparser.urlencoded({ extended: true }))
  app.use(cors({
    origin: '*',
    credentials: false
  }))

  mongooseConnect()

  app.get('/', getURL)
  
  app.listen('9090', () => {
    console.log('my rest api running on port 9090')
  })
}

main()
