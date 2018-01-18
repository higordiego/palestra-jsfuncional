module.exports = ({
    requestRequired: (req, required, Errors) => {
        required.map((key, index) => {
            req.assert(required[index], Errors[key]).notEmpty()
        })
        return req.validationErrors()
    },
    
    validateBody: (object, ...body) => returnObject => body.map(key =>  returnObject[key] = object[key]),

    requestOptional: (req, required, Errors) => {
        required.map((key, index) => {
            req.assert(required[index], Errors[key]).optional().notEmpty()
        })
        return req.validationErrors()
    }
})