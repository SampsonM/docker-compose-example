const URLModel = require('../models/url')

module.exports = async function getURL(req, res, next) {
  try {
    const responseData = await handleURL(req.query.url)

    return res.status(200).json(responseData)

  } catch (err) {
    res.status(500).json(err)
  }
}

async function handleURL(requestURL) {
  const dbURL = await URLModel.find({ URL: requestURL }).lean()

  if (dbURL.length == 0) {
    const savedURL = await addURL(requestURL)
    
    return { url: savedURL, existed: false }

  } else {
    return { url: requestURL, existed: true }
  }
}

async function addURL(url) {
  const newURL = new URLModel({
    'name': url,
    'URL': url
  })

  return await newURL.save()
}
