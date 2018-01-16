module.exports = app => Model => {
    const mongoose = require('mongoose')
    const Schema = mongoose.Schema

    const model = new Schema(Model.model)

    module.exports = mongoose.model(Model.name, model)
}