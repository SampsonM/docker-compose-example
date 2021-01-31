const URLModel = require('../models/url')

async function addURL(req, res) {
  try {
    const responseData = await handleURL(req.body.url)

    return res.status(200).json(responseData)

  } catch (err) {
    res.status(500).json(err)
  }
}

async function handleURL(requestURL) {
  const dbURL = await URLModel.find({ URL: requestURL }).lean()

  if (dbURL.length == 0) {
    const savedURL = await saveURL(requestURL)
    const URLs = await URLModel.find().lean()
    
    return { url: savedURL, existed: false, URLs }

  } else {
    return { url: requestURL, existed: true }
  }
}

async function saveURL(url) {
  const shortURL = shortenURL(url)

  const newURL = new URLModel({
    'shortURL': shortURL,
    'URL': url
  })

  const savedURL = await newURL.save()

  return savedURL
}

function shortenURL(url) {
  let shortURL = ''

  for (let i = 0; i < 4; i++) {
    const num = randomIntFromInterval(48, 57)
    const char = randomIntFromInterval(65, 90)

    shortURL += `${String.fromCharCode(num)}${String.fromCharCode(char)}`
  }

  return shortURL
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

async function getAllURLs(req, res) {
  try {
    const URLs = await URLModel.find().lean()

    return res.status(200).json(URLs)

  } catch (error) {
    return res.status(500).json("Broken get all URL's request")
  }
}

module.exports = {
  addURL,
  getAllURLs
}
