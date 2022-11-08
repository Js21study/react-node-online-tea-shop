const uuid = require('uuid')
const path = require('path');
const { Basket, BasketTea} = require('../models/models')
const ApiError = require('../error/ApiError');

class BasketController {
    async create(req, res, next) {
        try {
            let {name, email, phone, order} = req.body
            const orderOr = await Basket.create({name, email, phone});

            const orderOrTea = () => {
                order = JSON.parse(order)
                order.forEach(i =>
                    BasketTea.create({
                        name: i.name,
                        price: i.price,
                        basketId: orderOr.id,
                        teaId: i.id
                     
                    })
                )
            }
            orderOrTea()
            

            return res.json(orderOr)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        const orders = await Basket.findAll({
            
            include: [{model: BasketTea, as: 'order'}]
        },)
        return res.json(orders)

    }
}

module.exports = new BasketController()
