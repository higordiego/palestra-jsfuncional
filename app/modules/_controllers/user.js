module.exports = app => {
    const User = app.models.User
    const Persistence = require('../../helpers/persistence')(User)
    const Helpers = require('../../helpers/validate')
    return {
        create: (req, res) => {
            const body = {};
            Helpers.validateBody(req.body, 'name', 'email', 'phone', 'password')(body)
            Persistence.create(res)(body)
        }
    }
}