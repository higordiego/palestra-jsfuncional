module.exports = app => {
    return {
        create: (req, res) => res.status(200).json(req.body)
    }
}