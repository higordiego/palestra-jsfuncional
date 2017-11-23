module.exports = {
    errorFormatter: (param, msg, value) => ({
            title: msg.title,
            message: msg.message,
            value: value
    })
}
