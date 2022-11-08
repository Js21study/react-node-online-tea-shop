const Router = require('express')
const router = new Router()
const teaRouter = require('./teaRouter')
const userRouter = require('./userRouter')
const sortRouter = require('./sortRouter')
const typeRouter = require('./typeRouter')
const basketRouter = require('./basketRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/sort', sortRouter)
router.use('/tea', teaRouter)
router.use('/basket', basketRouter)

module.exports = router
