module.exports = app => {
    const url = '/api/v1/user'
    const Validate = require('../validates/user')(app)
    const Controller = require('../_controllers/user')(app)

    app.route(`${url}`)
        .get(Controller.findAll)
        .post(Validate.create, Controller.create)

    app.route(`${url}/:_id`)
        .get(Controller.findOne)
        .put(Controller.update)
        .delete(Controller.delete)
}
