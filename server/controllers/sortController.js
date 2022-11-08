const {Sort} = require('../models/models')
const ApiError = require('../error/ApiError');

class SortController {
    async create(req, res) {
        const {name} = req.body
        const sort = await Sort.create({name})
        return res.json(sort)
    }

    async getAll(req, res) {
        const sorts = await Sort.findAll()
        return res.json(sorts)
    }

}

module.exports = new SortController()
