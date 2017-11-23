const PATH = './app/modules/routes'
const fs = require('fs')

const condition = (object) => !object.startsWith('.')

const requireRoutes = (path, app) => object => require(`${path}/${object}`)(app)

module.exports = app => {
    fs.readdirSync(PATH)
        .filter(condition)
        .map(requireRoutes(PATH, app))
}