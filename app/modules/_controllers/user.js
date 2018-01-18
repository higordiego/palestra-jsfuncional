module.exports = app => {
    const User = app.models.User
    const Persistence = require('../../helpers/persistence')(User)
    const Helpers = require('../../helpers/validate')
    return {
        create: (req, res) => {
            const body = {};
            Helpers.validateBody(req.body, 'name', 'email', 'phone', 'password')(body)
            Persistence.create(res)(body)
        },
        findAll: (req, res) => Persistence.findAll(res)({}),
        findOne: (req, res) => Persistence.findOne(res)({}, {}),
        update: (req, res) => {
            const body = {};
            Helpers.validateBody(req.body, 'name', 'phone', 'password')(body)
            Persistence.update(res)(req.params)(body)
        },
        delete: (req, res) => Persistence.remove(res)(req.params)
    }
}