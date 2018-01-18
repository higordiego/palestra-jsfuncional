module.exports = Model => {
    const mongoose = require('mongoose')
    const Schema = mongoose.Schema

    const model = new Schema(Model.model)

    return mongoose.model(Model.name, model)
}