module.exports = app => {
    const Helpers = require('../../helpers/validate')
    const User = require('../_models/user')
    return {
        create: (req, res) => {
            const body = {};
            Helpers.validateBody(req.body, 'name', 'email', 'phone', 'password')(body)
            User.create(body)
                .then(resp => res.status(201).json(resp))
                .catch(err => res.status(400).json(err))
        },
        findAll: (req, res) => 
            User.find({})
                .then(resp => res.status(200).json(resp))
                .catch(err => res.status(400).json(err)),
        
        findOne: (req, res) => 
            User.findOne(req.params)
                .then(resp => res.status(200).json(resp))
                .catch(err => res.status(400).json(err)),
        update: (req, res) =>
            User.update(req.params, req.body)
                .then(resp => res.status(200).json(resp))
                .catch(err => res.status(400).json(err)),
        delete: (req, res) => 
            User.remove(req.params)
                .then(resp => res.status(200).json(resp))
                .catch(err => res.status(400).json(err)),
    }
}