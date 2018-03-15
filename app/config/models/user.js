module.exports = ({
    model: {
        name: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        phone: {type: String, required: true}
    },
    name: 'User'
})