
const requestNotEmpty = (req, required, Errors) => {
    required.map((key, index) => {
        req.assert(required[index], Errors[key]).notEmpty()
    })
    return req.validationErrors()
}

const requestOptional = (req, required, Errors) => {
    required.map((key, index) => {
        req.assert(required[index], Errors[key]).optional()
    })
    return req.validationErrors()
}

module.exports = {
    requestNotEmpty,
    requestOptional
}