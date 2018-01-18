module.exports = app => {
    const PATH = './app/config/models'
    const fs = require('fs')

    const condition = (object) => !object.startsWith('.')

    const modelsReturn = (result, model, index) => {
        result[model.name] = require('./app/helpers/models')(model)
        return result
    }
    
    const importsJson = (object) =>  require(`${PATH}/${object}`)

    return fs.readdirSync(PATH)
            .filter(condition)
            .map(importsJson)
            .reduce(modelsReturn, {})
}
