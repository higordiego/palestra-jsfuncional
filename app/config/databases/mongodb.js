const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const url = 'mongodb://mongodb_presentation/apresentacao'

const options = {
    useMongoClient: true
}

mongoose.connect(url, options)
    .then(() => {
        mongoose.connection.on('error', (err) => {
            console.log(`mongoose connection: ${err}`)
        })
        mongoose.connection.on('reconnected', () => {
            console.log('Reconnected to MongoDB')
        })
    })
    .catch((err) => {
        console.log(`rejected promise ${err}`)
        mongoose.disconnect()
    })
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        process.exit(0)
    })
})
