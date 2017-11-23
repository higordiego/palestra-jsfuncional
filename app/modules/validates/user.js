module.exports = app => {
    const Errors = require('../../errors/user/error')
    const Validate = require('../../helpers/validate')
    return {
        create: (req, res, next) => {
            const required = ['name', 'email', 'phone', 'password']
            const error = Validate.requestNotEmpty(req, required, Errors)
            error ? res.status(400).json(error) : next()
        },
        update: (req, res, next) => {
            const required = ['name', 'email', 'phone', 'password']
            const error = Validate.requestOptional(req, required, Errors)
            error ? res.status(400).json(error) : next()
        }
    }
}

