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

  console.log(requestURL, dbURL)

  if (dbURL.length == 0) {
    const savedURL = await saveURL(requestURL)
    const URLs = await getAllURLs()
    
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

  return await newURL.save()
}

function shortenURL(url) {
  return url
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
