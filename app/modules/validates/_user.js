module.exports = app => {
    return {
        create: (req, res, next) => {
            req.assert('name', {title: 'Nome', message: 'Nome é requerido!'}).notEmpty()
            req.assert('email', {title: 'Email', message: 'Email é requerido!'}).notEmpty()
            req.assert('phone', {title: 'Telefone', message: 'Telefone é requerido!'}).notEmpty()
            req.assert('password', {title: 'Senha', message: 'Senha é requerido!'}).notEmpty()
            const errors = req.validationErrors()
            errors ? res.status(400).json(errors) : next()
        },
        update: (req, res, next) => {
            req.assert('name', {title: 'Nome', message: 'Nome é requerido!'}).optional()
            req.assert('email', {title: 'Email', message: 'Email é requerido!'}).optional()
            req.assert('phone', {title: 'Telefone', message: 'Telefone é requerido!'}).optional()
            req.assert('password', {title: 'Senha', message: 'Senha é requerido!'}).optional()
            const errors = req.validationErrors()
            errors ? res.status(400).json(errors) : next()
        }
    }
}

// const Errors = require('../../errors/user/pt-br')
// const Validate = require('../../helpers/validate')