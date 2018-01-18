module.exports = app => {
    const Helpers = require('../../helpers/validate')
    return {
        create: (req, res) => {
            const body = {};
            Helpers.validateBody(req.body, 'name', 'email', 'phone', 'password')(body)
            res.status(200).json(body)
        }
    }
}