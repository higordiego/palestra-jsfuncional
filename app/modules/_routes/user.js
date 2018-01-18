module.exports = app => {
    const url = '/api/v1/user'
    const Validate = require('../validates/user')(app)
    const Controller = require('../_controllers/user')(app)

    app.route(`${url}`)
        .post(Validate.create, Controller.create)
}
