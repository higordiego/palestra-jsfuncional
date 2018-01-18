module.exports = app => {
    const Helpers = require('../../helpers/validate')
    const User = app.models.User
    return {
        create: (req, res) => {
            const body = {};
            Helpers.validateBody(req.body, 'name', 'email', 'phone', 'password')(body)
            User.create(body)
                .then(resp => res.status(201).json(resp))
                .catch(err => res.status(400).json(err))
        }
    }
}