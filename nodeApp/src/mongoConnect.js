const mongoose = require('mongoose')
const DB_URL = 'mongodb://mongodb:27017/'

module.exports = () => {
  mongoose.Promise = Promise;
  mongoose.set("useFindAndModify", false)
  mongoose.set("useCreateIndex", true)

	return mongoose.connect(
		DB_URL,
		{
      useNewUrlParser: true,
      useUnifiedTopology: true 
    },
		() => {
      console.log('connected at app.js to mongo')
		}
	)
}
