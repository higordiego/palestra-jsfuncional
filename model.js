module.exports = app => {
    // const User = require('./app/config/models/user')
    // const ModelUser = require('./app/helpers/models')(app)(User)

    const Books = require('./app/config/models/books')
    const ModelBooks = require('./app/helpers/models')(app)(Books)

    return ModelBooks
}
