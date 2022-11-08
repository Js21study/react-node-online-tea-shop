const uuid = require('uuid')
const path = require('path');
const {Tea, TeaInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class TeaController {
    async create(req, res, next) {
        try {
            let {name, price, sortId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const tea = await Tea.create({name, price, sortId, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    TeaInfo.create({
                        title: i.title,
                        description: i.description,
                        teaId: tea.id
                    })
                )
            }

            return res.json(tea)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {sortId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let teas;
        if (!sortId && !typeId) {
            teas = await Tea.findAndCountAll({limit, offset})
        }
        if (sortId && !typeId) {
            teas = await Tea.findAndCountAll({where:{sortId}, limit, offset})
        }
        if (!sortId && typeId) {
            teas = await Tea.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (sortId && typeId) {
            teas = await Tea.findAndCountAll({where:{typeId, sortId}, limit, offset})
        }
        return res.json(teas)
    }

    async getOne(req, res) {
        const {id} = req.params
        const tea = await Tea.findOne(
            {
                where: {id},
                include: [{model: TeaInfo, as: 'info'}]
            },
        )
        return res.json(tea)
    }
}

module.exports = new TeaController()
