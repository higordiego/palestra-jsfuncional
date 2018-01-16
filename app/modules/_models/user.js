module.exports = app => {
    const mongoose = require('mongoose')
    const Schema = mongoose.Schema

    const user = new Schema({
        name: {type: String, required: true},
        email: {type: String, required: true, index:{unique: true}},
        passsword: {type: String, required: true}
    })

    module.exports = mongoose.model('User', user)
}